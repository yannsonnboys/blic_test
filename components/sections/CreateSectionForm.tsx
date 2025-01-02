"use client";

import { Course, Section } from "@prisma/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import toast from "react-hot-toast";
import SectionList from "./SectionList";
import { list } from "postcss";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title is required and must be at least 2 characters",
  }),
});

const CreateSectionForm = ({
  course,
}: {
  course: Course & { sections: Section[] };
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const routes = [
    {
      label: "Basic Information",
      path: `/instructor/courses/${course.id}/basic`,
    },
    {
      label: "Curriculum",
      path: `/instructor/courses/${course.id}/sections`,
    },
  ];

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        `/api/courses/${course.id}/sections`,
        values
      );
      router.push(
        `/instructor/courses/${course.id}/sections/${response.data.id}`
      );
      toast.success("New section created successfully");
    } catch (err) {
      console.log("Failed to create a new section", err);
      toast.error("Something went wrong!");
    }
  };

  const onReorder = async (updateData: { id: string; position: number }[]) => {
    try {
      await axios.put(`/api/courses/${course.id}/sections/reorder`, {
        list: updateData,
      });
      toast.success("Sections reordered successfully");
    } catch (err) {
      console.log("Failed to reorder sections", err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="px-10 py-6">
      <div className="flex gap-5">
        {routes.map((route) => (
          <Link key={route.path} href={route.path} className="flex gap-4">
            <Button variant={pathname === route.path ? "default" : "outline"}>
              {route.label}
            </Button>
          </Link>
        ))}
      </div>

      <SectionList
        items={course.sections || []}
        onReorder={onReorder}
        onEdit={(id) =>
          router.push(`/instructor/courses/${course.id}/sections/${id}`)
        }
      />

      <h1 className="text-xl font-bold mt-5">Add New Section</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Introduction"
                    {...field}
                    className="w-[60%]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-5">
            <Link href={`/instructor/courses/${course.id}/basic`}>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateSectionForm;
