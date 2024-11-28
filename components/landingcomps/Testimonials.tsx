import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function EnterpriseTestimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "IT Director",
      company: "TechCorp Solutions",
      content:
        "WePZ Academy's online tech repair courses have significantly improved our IT team's efficiency. The ROI on this training has been exceptional.",
      avatar: "SC",
      logo: "/placeholder.svg?height=40&width=40&text=TC",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Technical Support",
      company: "Global Systems Inc.",
      content:
        "The depth of knowledge our support staff gained from WePZ Academy's courses has reduced our average ticket resolution time by 35%.",
      avatar: "MR",
      logo: "/placeholder.svg?height=40&width=40&text=GS",
    },
    {
      name: "Emily Watkins",
      role: "CTO",
      company: "InnovateTech",
      content:
        "WePZ Academy's curriculum is cutting-edge. It's kept our team ahead of the curve in an ever-evolving tech landscape.",
      avatar: "EW",
      logo: "/placeholder.svg?height=40&width=40&text=IT",
    },
    {
      name: "David Patel",
      role: "Senior Repair Technician",
      company: "QuickFix Electronics",
      content:
        "The virtual labs in WePZ Academy's courses provided hands-on experience that translated directly to improved performance in my daily work.",
      avatar: "DP",
      logo: "/placeholder.svg?height=40&width=40&text=QE",
    },
    {
      name: "Lisa Thompson",
      role: "HR Manager",
      company: "TechTalent Solutions",
      content:
        "WePZ Academy's certifications have become a benchmark for quality in our hiring process. Candidates with these credentials consistently excel.",
      avatar: "LT",
      logo: "/placeholder.svg?height=40&width=40&text=TT",
    },
    {
      name: "Robert Yamamoto",
      role: "Operations Manager",
      company: "Precision Repairs Co.",
      content:
        "Implementing WePZ Academy's training across our repair centers has standardized our processes and improved overall service quality.",
      avatar: "RY",
      logo: "/placeholder.svg?height=40&width=40&text=PR",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl lg:text-6xl mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          See how WePZ Academy is transforming tech repair education for
          enterprises worldwide
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={`/placeholder.svg?height=48&width=48&text=${testimonial.avatar}`}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-sm font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                </div>
                <blockquote className="mt-4 text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
