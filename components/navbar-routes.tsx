"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import SearchInput from "./search-input";
import { isTeacher } from "@/lib/teacher";

const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/dashboard/teacher");
  const isCoursePage = pathname?.includes("/dashboard/courses");
  const isSearchPage = pathname === "/dashboard/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href={"/dashboard"}>
            <Button
              size={"sm"}
              variant={"ghost"}
              className="text-slate-600 dark:text-slate-200 hover:bg-slate-200/20 dark:hover:bg-slate-700/20"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href={"/dashboard/teacher/courses"}>
            <Button
              size={"sm"}
              variant={"ghost"}
              className="text-slate-600 dark:text-slate-200 hover:bg-slate-200/20 dark:hover:bg-slate-700/20"
            >
              Teacher Mode
            </Button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </>
  );
};

export default NavbarRoutes;
