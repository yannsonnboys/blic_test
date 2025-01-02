import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { TeacherList } from "@/components/teachers/TeacherList";

const TeachersPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  // 1. Fetch courses created by the user
  // const courses = await db.course.findMany({
  //   where: {
  //     instructorId: userId,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  return (
    <div className="px-6 py-4">
      <div className="mt-5">
        <TeacherList />
      </div>
    </div>
  );
};

export default TeachersPage;
