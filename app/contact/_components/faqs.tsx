import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const faqCategories = ["general", "courses", "payment", "technical"];

const faqData = {
  general: [
    {
      question: "What is TechFix Academy?",
      answer:
        "TechFix Academy is an online learning platform specializing in tech repair courses.",
    },
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking the 'Sign Up' button in the top right corner of our website.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, we have mobile apps available for both iOS and Android devices.",
    },
    {
      question: "How often are new courses added?",
      answer:
        "We add new courses and update existing ones on a monthly basis to keep our content current with the latest tech trends.",
    },
    {
      question: "Can I interact with instructors?",
      answer:
        "Yes, our platform includes forums where you can ask questions and interact with both instructors and fellow students.",
    },
  ],
  courses: [
    {
      question: "What types of courses do you offer?",
      answer:
        "We offer a wide range of courses including laptop repair, software troubleshooting, and data recovery.",
    },
    {
      question: "Are the courses self-paced?",
      answer:
        "Yes, all our courses are self-paced, allowing you to learn at your own speed.",
    },
    {
      question: "Do I get a certificate upon completion?",
      answer:
        "Yes, you receive a certificate of completion for each course you finish.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Most of our beginner courses don't have prerequisites. For advanced courses, we clearly state any required prior knowledge or skills.",
    },
    {
      question: "How long does it typically take to complete a course?",
      answer:
        "Course duration varies, but most can be completed in 4-6 weeks if you dedicate 3-5 hours per week.",
    },
  ],
  payment: [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 30-day money-back guarantee on all our courses.",
    },
    {
      question: "Are there any discounts available?",
      answer:
        "We regularly offer discounts for bulk purchases and during special promotions.",
    },
    {
      question: "Do you offer any subscription plans?",
      answer:
        "Yes, we offer monthly and annual subscription plans that give you access to all our courses.",
    },
    {
      question: "Is there an option for corporate or group training?",
      answer:
        "Absolutely! We offer special rates and customized training programs for corporate clients and groups.",
    },
  ],
  technical: [
    {
      question: "What are the system requirements?",
      answer:
        "Our courses can be accessed on any modern web browser. Some practical exercises may require specific hardware.",
    },
    {
      question: "Is there technical support available?",
      answer:
        "Yes, we offer technical support via email and live chat during business hours.",
    },
    {
      question: "Can I download course materials for offline use?",
      answer:
        "Yes, most of our course materials are available for download and offline viewing.",
    },
    {
      question: "Are the video lessons captioned?",
      answer:
        "Yes, all our video lessons include captions to enhance accessibility.",
    },
    {
      question: "What do I do if I encounter a bug on the platform?",
      answer:
        "If you encounter any technical issues, please report them to our support team via the 'Help' section in your account dashboard.",
    },
  ],
};

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {faqCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="py-2 px-4 text-sm sm:text-base"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          {faqCategories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-4 mt-10 md:mt-4">
                {faqData[category as keyof typeof faqData].map(
                  (item: { question: string; answer: string }, i: number) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>{item.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500 dark:text-gray-400">
                          {item.answer}
                        </p>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
