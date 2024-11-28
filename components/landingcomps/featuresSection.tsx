import {
  Laptop,
  PenToolIcon as Tools,
  DollarSign,
  GraduationCap,
  Globe,
  Award,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Virtual Hands-on Experience",
      description:
        "Gain practical skills through our advanced online simulation tools.",
    },
    {
      icon: <Tools className="h-6 w-6" />,
      title: "Latest Tech Skills",
      description:
        "Stay updated with cutting-edge repair techniques for modern devices.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Lucrative Career",
      description:
        "Enter a high-demand field with excellent remote work opportunities.",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Industry Certifications",
      description:
        "Earn recognized online certifications to boost your credibility.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "100% Online Learning",
      description:
        "Access course materials anytime, anywhere with our flexible online platform.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Online Instructors",
      description:
        "Learn from industry professionals through live webinars and interactive sessions.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Why Learn Tech Repair?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Discover the advantages of mastering laptop and computer repair from
            anywhere
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border rounded-lg bg-card dark:bg-gray-800"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
