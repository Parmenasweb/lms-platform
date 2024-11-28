"use client";
import React from "react";
import { Category, Course } from "@prisma/client";
import CourseCard from "@/components/course-card";
import Categories from "@/app/dashboard/search/_components/Categories";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type CourseWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
};

const FeaturedCourses: React.FC = () => {
  const [courses, setCourses] = useState<CourseWithCategory[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  const fetchCourses = async (categoryId?: string) => {
    try {
      const response = await fetch(
        `/api/course${categoryId ? `?categoryId=${categoryId}` : ""}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch courses: ${response.statusText}`);
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setCourses([]); // Set empty courses array on error
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.statusText}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]); // Set empty categories array on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetchCategories();
      const categoryId = searchParams.get("categoryId");
      await fetchCourses(categoryId || undefined);
      setIsLoading(false);
    };

    fetchData();
  }, [searchParams]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 dark:text-white">
          Featured Courses
        </h2>
        <div className="p-6 space-y-4">
          {isLoading ? (
            <div className="text-center">Loading categories...</div>
          ) : categories.length > 0 ? (
            <Categories items={categories} />
          ) : (
            <div className="text-center text-sm text-muted-foreground">
              No categories available
            </div>
          )}
          {isLoading ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="h-64 bg-gray-200 animate-pulse rounded-lg"
                ></div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  imageUrl={course.imageUrl ?? ""}
                  chaptersLength={course.chapters.length}
                  price={course.price ?? 0}
                  category={course.category?.name ?? "Uncategorized"}
                  progress={null} // No progress for featured courses
                />
              ))}
            </div>
          )}
          {!isLoading && courses.length === 0 && (
            <div className="text-center text-sm text-muted-foreground mt-10">
              No courses found
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
