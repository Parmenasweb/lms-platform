"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";

const courseCategories = [
  "All",
  "Hardware Repair",
  "Software Troubleshooting",
  "Data Recovery",
  "Motherboard Repair",
];

const courses = [
  {
    title: "Laptop Repair Essentials",
    description:
      "Master the fundamentals of laptop repair and troubleshooting.",
    category: "Hardware Repair",
    rating: 4.8,
    students: 1234,
    duration: "10 weeks",
    image: "/placeholder.svg",
  },
  {
    title: "Advanced Software Diagnostics",
    description: "Dive deep into complex software issues and their solutions.",
    category: "Software Troubleshooting",
    rating: 4.7,
    students: 987,
    duration: "8 weeks",
    image: "/placeholder.svg",
  },
  {
    title: "Data Recovery Techniques",
    description:
      "Learn professional methods to recover lost or corrupted data.",
    category: "Data Recovery",
    rating: 4.9,
    students: 756,
    duration: "6 weeks",
    image: "/placeholder.svg",
  },
  {
    title: "Motherboard Repair Mastery",
    description:
      "Become an expert in diagnosing and fixing motherboard issues.",
    category: "Motherboard Repair",
    rating: 4.6,
    students: 543,
    duration: "12 weeks",
    image: "/placeholder.svg",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 dark:text-white">
          Featured Courses
        </h2>

        <Tabs defaultValue="All" className="w-full mb-8">
          <TabsList className="flex flex-wrap justify-center gap-2">
            {courseCategories.map((category: string) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-4 py-2 dark:text-gray-300 dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {courseCategories.map((category: string) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter(
                    (course) =>
                      category === "All" || course.category === category
                  )
                  .map((course, index) => (
                    <Card
                      key={index}
                      className="flex flex-col dark:bg-gray-800 dark:border-gray-700"
                    >
                      <CardHeader className="p-0">
                        <Image
                          src={course.image}
                          alt={course.title}
                          width={300}
                          height={300}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </CardHeader>
                      <CardContent className="flex-grow p-6">
                        <Badge className="mb-2 dark:bg-gray-700 dark:text-gray-300">
                          {course.category}
                        </Badge>
                        <CardTitle className="text-xl mb-2 dark:text-white">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="dark:text-gray-400">
                          {course.description}
                        </CardDescription>
                        <div className="flex items-center mt-4 space-x-4 text-sm dark:text-gray-300">
                          <span className="flex items-center">
                            <span className="w-4 h-4 mr-1 text-yellow-500">
                              {course.rating}
                            </span>
                            {course.rating}
                          </span>
                          <span className="flex items-center">
                            <span className="w-4 h-4 mr-1">
                              {course.students} students
                            </span>
                          </span>
                          <span className="flex items-center">
                            <span className="w-4 h-4 mr-1">
                              {course.duration}
                            </span>
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700">
                          Enroll Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedCourses;
