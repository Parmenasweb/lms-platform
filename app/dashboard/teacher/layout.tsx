import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Wepz academy | Teacher Mode",
  description: "Wepz academy by parma ",
  icons: {
    icon: "/icon.svg",
  },
};

const TeacherLayout: React.FC<Props> = async ({ children }) => {
  const { userId } = await auth();

  if (!isTeacher(userId)) return redirect("/");

  return <>{children}</>;
};

export default TeacherLayout;
