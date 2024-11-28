"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const CourseStatistics = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 dark:text-white">
          Industry Statistics
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">
                Global Market Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold dark:text-white">$4.5B</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Expected by 2026
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Job Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold dark:text-white">7%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Annual increase
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Average Salary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold dark:text-white">$52,000</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Per year
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Demand Increase</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold dark:text-white">15%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Year-over-year
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseStatistics;
