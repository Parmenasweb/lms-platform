"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Laptop, Menu, Sun, Moon, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  return (
    <header className="px-4 lg:px-6 h-20 flex items-center border-b sticky top-0 bg-background/95 backdrop-blur z-50 transition-all duration-300 dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          className="flex items-center justify-center space-x-2 group"
          href="/"
        >
          <Laptop className="h-8 w-8 text-primary transition-transform group-hover:rotate-[-10deg] dark:text-primary-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-200">
            Wepz Academy
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {/* Navigation Links */}
          <Link
            href="/dashboard/courses"
            className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary-400"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary-400"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary-400"
          >
            Contact
          </Link>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search courses..."
              className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <Button
            asChild
            variant="outline"
            className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-800" />
            )}
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden dark:text-gray-300"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] dark:bg-gray-900 dark:text-gray-100"
            >
              <nav className="flex flex-col gap-4">
                <Link
                  href="/dashboard/courses"
                  onClick={() => setIsOpen(false)}
                  className="dark:text-gray-300 dark:hover:text-primary-400"
                >
                  Courses
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="dark:text-gray-300 dark:hover:text-primary-400"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="dark:text-gray-300 dark:hover:text-primary-400"
                >
                  Contact
                </Link>
                <Button
                  className="w-full dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Button>
                <Button
                  className="w-full dark:bg-primary-600 dark:text-gray-100 dark:hover:bg-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
