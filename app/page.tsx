import Header from "@/components/landingcomps/Header";
import Footer from "@/components/landingcomps/Footer";
import HeroSection from "@/components/landingcomps/HeroSection";
import CourseStatistics from "@/components/landingcomps/CourseStatistics";
import FeaturedCourses from "@/components/landingcomps/FeaturedCourses";
import LearningApproach from "@/components/landingcomps/LearningApproach";
import Testimonials from "@/components/landingcomps/Testimonials";
import LogoClouds from "@/components/landingcomps/logo-cloud";
import CTASection from "@/components/landingcomps/cta";
import FeaturesSection from "@/components/landingcomps/featuresSection";
import WhyWePZAcademy from "@/components/landingcomps/why-us";
import { FAQ } from "./contact/_components/faqs";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 bg-white">
      <Header />
      <main className="flex-1 dark:text-gray-100 text-gray-900">
        <HeroSection />
        <CourseStatistics />
        <LogoClouds />
        <FeaturedCourses />
        <FeaturesSection />
        <WhyWePZAcademy />
        <LearningApproach />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Laptop,
//   Search,
//   Star,
//   Users,
//   Clock,
//   Award,
//   ChevronRight,
//   Menu,
//   Sun,
//   Moon,
//   BookOpen,
//   CheckCircle,
//   DollarSign,
//   Briefcase,
//   Globe,
//   ArrowRight,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useTheme } from "next-themes";
// import { motion } from "framer-motion";

// export default function Component() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { setTheme, theme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   const courseCategories = [
//     "All",
//     "Hardware Repair",
//     "Software Troubleshooting",
//     "Data Recovery",
//     "Motherboard Repair",
//   ];

//   const courses = [
//     {
//       title: "Laptop Repair Essentials",
//       description:
//         "Master the fundamentals of laptop repair and troubleshooting.",
//       category: "Hardware Repair",
//       rating: 4.8,
//       students: 1234,
//       duration: "10 weeks",
//       image: "/placeholder.svg",
//     },
//     {
//       title: "Advanced Software Diagnostics",
//       description:
//         "Dive deep into complex software issues and their solutions.",
//       category: "Software Troubleshooting",
//       rating: 4.7,
//       students: 987,
//       duration: "8 weeks",
//       image: "/placeholder.svg",
//     },
//     {
//       title: "Data Recovery Techniques",
//       description:
//         "Learn professional methods to recover lost or corrupted data.",
//       category: "Data Recovery",
//       rating: 4.9,
//       students: 756,
//       duration: "6 weeks",
//       image: "/placeholder.svg",
//     },
//     {
//       title: "Motherboard Repair Mastery",
//       description:
//         "Become an expert in diagnosing and fixing motherboard issues.",
//       category: "Motherboard Repair",
//       rating: 4.6,
//       students: 543,
//       duration: "12 weeks",
//       image: "/placeholder.svg",
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-20 flex items-center border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-all duration-300">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link
//             className="flex items-center justify-center space-x-2 group"
//             href="#"
//           >
//             <Laptop className="h-8 w-8 text-primary transition-transform group-hover:rotate-[-10deg]" />
//             <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
//               TechFix Academy
//             </span>
//           </Link>
//           <nav className="hidden md:flex items-center space-x-6">
//             <Link
//               className="text-sm font-medium hover:text-primary transition-colors relative group"
//               href="#"
//             >
//               Courses
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
//             </Link>
//             <Link
//               className="text-sm font-medium hover:text-primary transition-colors relative group"
//               href="#"
//             >
//               About
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
//             </Link>
//             <Link
//               className="text-sm font-medium hover:text-primary transition-colors relative group"
//               href="#"
//             >
//               Contact
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
//             </Link>
//             <div className="relative">
//               <Input
//                 type="search"
//                 placeholder="Search courses..."
//                 className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//             </div>
//             <Button variant="outline">Login</Button>
//             <Button>Dashboard</Button>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
//             >
//               {mounted &&
//                 (theme === "dark" ? (
//                   <Sun className="h-5 w-5" />
//                 ) : (
//                   <Moon className="h-5 w-5" />
//                 ))}
//             </button>
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="md:hidden">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Toggle menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//                 <nav className="flex flex-col gap-4">
//                   <Link
//                     className="text-lg font-medium hover:text-primary transition-colors"
//                     href="#"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Courses
//                   </Link>
//                   <Link
//                     className="text-lg font-medium hover:text-primary transition-colors"
//                     href="#"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     About
//                   </Link>
//                   <Link
//                     className="text-lg font-medium hover:text-primary transition-colors"
//                     href="#"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Contact
//                   </Link>
//                   <Button
//                     className="w-full"
//                     variant="outline"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Login
//                   </Button>
//                   <Button className="w-full" onClick={() => setIsOpen(false)}>
//                     Dashboard
//                   </Button>
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
//           <div className="container px-4 md:px-6 mx-auto">
//             <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//               <motion.div
//                 className="flex flex-col justify-center space-y-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     Elevate Your Tech Repair Skills
//                   </h1>
//                   <p className="max-w-[600px] text-gray-300 md:text-xl">
//                     Join the elite in tech repair. Learn from industry experts
//                     and transform your career with cutting-edge courses.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Button
//                     className="bg-primary text-primary-foreground hover:bg-primary/90"
//                     size="lg"
//                   >
//                     Get Started
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="text-white border-white hover:bg-white hover:text-black"
//                   >
//                     Browse Courses
//                   </Button>
//                 </div>
//                 <motion.div
//                   className="flex items-center space-x-4 text-sm"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4, duration: 0.6 }}
//                 >
//                   <div className="flex items-center">
//                     <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
//                     <span>Industry-recognized certifications</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
//                     <span>Expert-led training</span>
//                   </div>
//                 </motion.div>
//               </motion.div>
//               <motion.div
//                 className="relative mt-8 lg:mt-0"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Image
//                   alt="Laptop Repair"
//                   className="object-cover rounded-xl shadow-2xl"
//                   height="400"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "3/2",
//                     objectFit: "cover",
//                   }}
//                   width="600"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl" />
//                 <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
//                   <p className="text-white font-semibold">
//                     Start your journey today
//                   </p>
//                   <p className="text-gray-300 text-sm">
//                     Join 10,000+ students worldwide
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
//               Industry Statistics
//             </h2>
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Global Market Size</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-4xl font-bold">$4.5B</p>
//                   <p className="text-sm text-gray-500">Expected by 2026</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Job Growth</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-4xl font-bold">7%</p>
//                   <p className="text-sm text-gray-500">Annual increase</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Average Salary</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-4xl font-bold">$52,000</p>
//                   <p className="text-sm text-gray-500">Per year</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Demand Increase</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-4xl font-bold">15%</p>
//                   <p className="text-sm text-gray-500">Year-over-year</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
//               Featured Courses
//             </h2>

//             <Tabs defaultValue="All" className="w-full mb-8">
//               <TabsList className="flex flex-wrap justify-center gap-2">
//                 {courseCategories.map((category) => (
//                   <TabsTrigger
//                     key={category}
//                     value={category}
//                     className="px-4 py-2"
//                   >
//                     {category}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//               {courseCategories.map((category) => (
//                 <TabsContent key={category} value={category}>
//                   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                     {courses
//                       .filter(
//                         (course) =>
//                           category === "All" || course.category === category
//                       )
//                       .map((course, index) => (
//                         <Card key={index} className="flex flex-col">
//                           <CardHeader className="p-0">
//                             <Image
//                               src={course.image}
//                               alt={course.title}
//                               width={400}
//                               height={200}
//                               className="w-full h-48 object-cover rounded-t-lg"
//                             />
//                           </CardHeader>
//                           <CardContent className="flex-grow p-6">
//                             <Badge className="mb-2">{course.category}</Badge>
//                             <CardTitle className="text-xl mb-2">
//                               {course.title}
//                             </CardTitle>
//                             <CardDescription>
//                               {course.description}
//                             </CardDescription>
//                             <div className="flex items-center mt-4 space-x-4 text-sm">
//                               <span className="flex items-center">
//                                 <Star className="w-4 h-4 mr-1 text-yellow-500" />
//                                 {course.rating}
//                               </span>
//                               <span className="flex items-center">
//                                 <Users className="w-4 h-4 mr-1" />
//                                 {course.students} students
//                               </span>
//                               <span className="flex items-center">
//                                 <Clock className="w-4 h-4 mr-1" />
//                                 {course.duration}
//                               </span>
//                             </div>
//                           </CardContent>
//                           <CardFooter>
//                             <Button className="w-full">Enroll Now</Button>
//                           </CardFooter>
//                         </Card>
//                       ))}
//                   </div>
//                 </TabsContent>
//               ))}
//             </Tabs>

//             <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
//               <h3 className="text-2xl font-bold mb-6 text-center">
//                 Why Choose Our Courses?
//               </h3>
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 <div className="flex items-start space-x-4">
//                   <Award className="w-8 h-8 text-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold mb-2">
//                       Industry-Recognized Certification
//                     </h4>
//                     <p className="text-gray-600">
//                       Earn certificates that are valued by top tech companies
//                       worldwide.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Users className="w-8 h-8 text-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold mb-2">Expert Instructors</h4>
//                     <p className="text-gray-600">
//                       Learn from professionals with years of real-world
//                       experience in laptop repair.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold mb-2">Hands-on Projects</h4>
//                     <p className="text-gray-600">
//                       Apply your skills to real-world scenarios with our
//                       practical assignments.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Clock className="w-8 h-8 text-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold mb-2">Flexible Learning</h4>
//                     <p className="text-gray-600">
//                       Study at your own pace with lifetime access to course
//                       materials.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Star className="w-8 h-8 text-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold mb-2">
//                       High Student Satisfaction
//                     </h4>
//                     <p className="text-gray-600">
//                       Join thousands of satisfied learners who have transformed
//                       their careers.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Users className="w-8 h-8 text-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold mb-2">Community Support</h4>
//                     <p className="text-gray-600">
//                       Connect with fellow students and instructors in our active
//                       learning community.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
//               Why Learn Laptop Repair?
//             </h2>
//             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//               <div className="flex flex-col items-center text-center">
//                 <Users className="h-12 w-12 mb-4 text-primary" />
//                 <h3 className="text-xl font-bold mb-2">High Demand</h3>
//                 <p className="text-gray-600">
//                   Tech repair skills are in constant demand in today&apos;s
//                   digital world.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <BookOpen className="h-12 w-12 mb-4 text-primary" />
//                 <h3 className="text-xl font-bold mb-2">
//                   Comprehensive Curriculum
//                 </h3>
//                 <p className="text-gray-600">
//                   Our courses cover everything from basic to advanced repair
//                   techniques.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <Award className="h-12 w-12 mb-4 text-primary" />
//                 <h3 className="text-xl font-bold mb-2">
//                   Industry Certification
//                 </h3>
//                 <p className="text-gray-600">
//                   Earn recognized certifications upon course completion.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <DollarSign className="h-12 w-12 mb-4 text-primary" />
//                 <h3 className="text-xl font-bold mb-2">Lucrative Career</h3>
//                 <p className="text-gray-600">
//                   Laptop repair technicians enjoy competitive salaries and job
//                   security.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <Briefcase className="h-12 w-12 mb-4 text-primary" />
//                 <h3 className="text-xl font-bold mb-2">
//                   Entrepreneurship Opportunities
//                 </h3>
//                 <p className="text-gray-600">
//                   Start your own repair business or freelance with the skills
//                   you learn.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <Globe className="h-12 w-12 mb-4 text-primary" />
//                 <h3 className="text-xl font-bold mb-2">Global Opportunities</h3>
//                 <p className="text-gray-600">
//                   Work remotely or relocate with skills that are in demand
//                   worldwide.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
//               Our Learning Approach
//             </h2>
//             <div className="grid gap-6 items-center">
//               <div className="aspect-video">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <p className="text-center text-gray-600 max-w-[600px] mx-auto">
//                 Our courses combine theoretical knowledge with hands-on
//                 practice. Watch our instructors demonstrate real-world repair
//                 scenarios and follow along with your own projects.
//               </p>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
//               What Our Students Say
//             </h2>
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {[1, 2, 3].map((i) => (
//                 <div
//                   key={i}
//                   className="flex flex-col bg-white rounded-lg shadow-lg p-6"
//                 >
//                   <p className="text-gray-600 mb-4">
//                     The courses at TechFix Academy have been instrumental in
//                     advancing my career in tech repair. Highly recommended!
//                   </p>
//                   <div className="flex items-center mt-auto">
//                     <Image
//                       alt="Student Avatar"
//                       className="rounded-full"
//                       height="40"
//                       src="/placeholder.svg"
//                       style={{
//                         aspectRatio: "40/40",
//                         objectFit: "cover",
//                       }}
//                       width="40"
//                     />
//                     <div className="ml-4">
//                       <p className="text-sm font-medium">Jane Doe</p>
//                       <p className="text-sm text-gray-600">
//                         Certified Laptop Technician
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
//               Course Categories
//             </h2>
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               {[
//                 "Hardware Repair",
//                 "Software Troubleshooting",
//                 "Data Recovery",
//                 "Motherboard Repair",
//                 "Screen Replacement",
//                 "Battery Replacement",
//                 "Liquid Damage Repair",
//                 "Preventive Maintenance",
//               ].map((category, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center p-4 bg-gray-100 rounded-lg"
//                 >
//                   <ChevronRight className="h-5 w-5 mr-2 text-primary" />
//                   <span className="font-medium">{category}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//                 Ready to Start Your Journey?
//               </h2>
//               <p className="max-w-[600px] text-gray-300 md:text-xl">
//                 Join thousands of students who have transformed their careers
//                 with our courses.
//               </p>
//               <Button className="bg-white text-black hover:bg-gray-200">
//                 Enroll Now
//               </Button>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container px-4 md:px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Company</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Careers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Press
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Blog
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Resources</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Documentation
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Help Center
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Community
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Webinars
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Legal</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Terms of Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Cookie Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     GDPR
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Connect</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Twitter
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     LinkedIn
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Facebook
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     Instagram
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm text-gray-400">
//               © 2024 TechFix Academy. All rights reserved.
//             </p>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//               <Link
//                 href="#"
//                 className="text-gray-400 hover:text-primary transition-colors"
//               >
//                 <span className="sr-only">Twitter</span>
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                 </svg>
//               </Link>
//               <Link
//                 href="#"
//                 className="text-gray-400 hover:text-primary transition-colors"
//               >
//                 <span className="sr-only">GitHub</span>
//                 <svg
//                   className="h-6 w-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
