"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const CourseStatistics = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          Tech Repair Industry Insights
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Stay ahead of the curve with our comprehensive analysis of the rapidly
          evolving tech repair sector.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                Global Market Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary dark:text-primary-400">
                $4.5B
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Expected by 2026
              </p>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                12% CAGR from 2021-2026
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                Job Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary dark:text-primary-400">
                7%
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Annual increase
              </p>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                Outpacing national average by 2x
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                Average Salary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary dark:text-primary-400">
                $52,000
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Per year
              </p>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                Top earners exceed $80,000
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                Demand Increase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary dark:text-primary-400">
                15%
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Year-over-year
              </p>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                Driven by IoT and 5G adoption
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                Skill Gap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary dark:text-primary-400">
                68%
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Of employers report shortage
              </p>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                Critical need for trained professionals
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                Industry Sectors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary dark:text-primary-400">
                5+
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Major growth areas
              </p>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                Including mobile, PC, and IoT devices
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/industry-report"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600 dark:bg-primary-400 dark:text-gray-900 dark:hover:bg-primary-500"
          >
            Download Full Industry Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseStatistics;
