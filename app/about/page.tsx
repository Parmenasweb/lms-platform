"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Laptop,
  Users,
  Award,
  BookOpen,
  Globe,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/landingcomps/Header";
import Footer from "@/components/landingcomps/Footer";
import LogoClouds from "@/components/landingcomps/logo-cloud";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Wepz computers",
      role: "Founder & CEO",
      image: "/wepz.webp",
    },
  ];

  const milestones = [
    { year: 2020, event: "Wepz Academy was founded" },
    { year: 2021, event: "Launched first online course" },
    { year: 2022, event: "Reached 1,000 students" },
    { year: 2023, event: "Introduced industry certification programs" },
    { year: 2024, event: "Expanded to international markets" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About Wepz Academy
                </h1>
                <p className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl mt-4">
                  Empowering the next generation of tech repair professionals
                  through cutting-edge education and hands-on training.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Wepz Academy
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                  Wepz Academy is a premier online learning platform dedicated
                  to empowering individuals with comprehensive tech repair
                  skills. Our mission is to bridge the gap between theoretical
                  knowledge and practical expertise in the ever-evolving world
                  of technology.
                </p>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                  We offer industry-leading courses taught by experienced
                  professionals, combining hands-on training with cutting-edge
                  learning methodologies. Our curriculum is constantly updated
                  to reflect the latest trends and technologies in the tech
                  repair industry.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary">1000+</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Students Trained
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary">50+</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Expert Courses
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/wepz.webp"
                  alt="Tech Learning Environment"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Mission
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/computer-interface.webp"
                  alt="Tech repair professional at work"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg text-muted-foreground mb-4">
                  At Wepz Academy, our mission is to bridge the skills gap in
                  the tech repair industry by providing high-quality, accessible
                  education to aspiring technicians worldwide.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe in the power of hands-on learning,
                  industry-relevant curriculum, and a supportive community to
                  nurture the next generation of tech repair professionals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose Wepz Academy?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: "Comprehensive Curriculum",
                  description:
                    "In-depth courses covering all aspects of tech repair",
                },
                {
                  icon: Users,
                  title: "Expert Instructors",
                  description:
                    "Learn from industry professionals with years of experience",
                },
                {
                  icon: Award,
                  title: "Industry Certifications",
                  description: "Prepare for and earn recognized certifications",
                },
                {
                  icon: Laptop,
                  title: "Hands-on Learning",
                  description:
                    "Practice with real-world scenarios and equipment",
                },
                {
                  icon: Globe,
                  title: "Global Community",
                  description:
                    "Connect with students and professionals worldwide",
                },
                {
                  icon: ChevronRight,
                  title: "Career Support",
                  description: "Job placement assistance and career guidance",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="flex flex-col items-center text-center p-6"
                >
                  <item.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Meet Our Team
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Card className="flex flex-col items-center text-center p-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center mb-8 ${
                    i % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div
                    className={`w-1/2 ${
                      i % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{milestone.year}</h3>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-800">
          <LogoClouds />
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Journey?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
                Join thousands of students who have transformed their careers
                with our courses.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90"
              >
                <Link href="/dashboard/search">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
