import {
  CheckCircle,
  Users,
  Trophy,
  Zap,
  BarChart,
  HeartHandshake,
} from "lucide-react";

export default function WhyWePZAcademy() {
  const reasons = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Industry-Validated Curriculum",
      description:
        "Our courses are designed and regularly updated by tech repair experts to meet industry standards.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Interactive Learning Community",
      description:
        "Join a vibrant online community of learners and instructors for support and networking.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Recognized Certifications",
      description:
        "Earn certifications that are respected and recognized by top tech companies worldwide.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Cutting-Edge Virtual Labs",
      description:
        "Practice on our state-of-the-art virtual repair simulations for a hands-on experience.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Personalized Learning Paths",
      description:
        "Adaptive learning technology tailors the course to your pace and learning style.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Lifetime Career Support",
      description:
        "Benefit from our extensive industry partnerships and ongoing career guidance.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Why Choose WePZ Academy?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            The premier online destination for tech repair education
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-background dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="rounded-full p-3 bg-primary/10 text-primary dark:bg-primary/20">
                {reason.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{reason.title}</h3>
              <p className="mt-2 text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
