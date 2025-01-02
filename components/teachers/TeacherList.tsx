import { currentUser } from "@clerk/nextjs/server";
//import Image from "next/image";
import React from "react";

export const TeacherList = async function Columns() {
  // const teacher = await clerkClient.users.getUser();
  // const teacher = await clerkClient.users.getUserList({
  //   orderBy: "-created_at",
  // });

  const teacher = await currentUser();
  console.log(teacher);

  if (!teacher) return <p>Not teacher found!</p>;

  // const imageUrl = teacher;
  const { imageUrl } = teacher; // == const imageUrl = teacher.imageUrl;
  const params = new URLSearchParams();

  params.set("height", "150");
  params.set("width", "150");
  params.set("quality", "100");
  params.set("fit", "fill");

  const profileImageUrl = `${imageUrl}?${params.toString()}`;

  return (
    <div className="flex flex-col md:flex-row flex-wrap mx-auto gap-10 md:max-w-2xlflex">
      <div className="flex flex-col items-center">
        <img
          src={profileImageUrl}
          alt="image"
          className="w-[50px] h-[50px] object-cover rounded-full"
        />
        <div className="text-center bg-sky-500 hover:bg-sky-700">
          <h1>
            {teacher?.firstName} {teacher?.lastName}
          </h1>
          <h3>{teacher?.emailAddresses[0].emailAddress}</h3>
        </div>
      </div>
    </div>
  );
};
