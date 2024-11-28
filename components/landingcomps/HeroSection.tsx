"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Link } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-100 via-gray-200 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col justify-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Elevate Your Tech Repair Skills
          </h1>
          <p className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl">
            Join the elite in tech repair. Learn from industry experts and
            transform your career with cutting-edge courses.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary-400 dark:text-gray-900 dark:hover:bg-primary-500"
              size="lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
            >
              <Link href="/dashboard/search">Browse Courses</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
