"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Link } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 xl:py-32 bg-gradient-to-br from-gray-100 via-gray-200 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex flex-col justify-center space-y-10 lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-primary-foreground dark:from-primary-400 dark:via-blue-400 dark:to-primary-200"
                >
                  Master the Art of
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
                  className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-primary-foreground dark:from-primary-400 dark:via-blue-400 dark:to-primary-200"
                >
                  Tech Repair
                </motion.h1>
              </div>
            </div>
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
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/hero-section.png.webp"
              alt="Tech Repair Course"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
