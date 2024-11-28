import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactItems = [
  { icon: Mail, title: "Email", content: "support@techfixacademy.com" },
  { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
  {
    icon: MapPin,
    title: "Address",
    content: "123 Tech Street, San Francisco, CA 94105",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 9AM - 5PM PST",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Contact Information
      </h2>
      <p className="text-gray-500 dark:text-gray-400">
        Choose the most convenient way to reach us. We&apos;re available to
        assist you through various channels.
      </p>
      <div className="grid gap-6">
        {contactItems.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              <item.icon className="h-8 w-8 text-primary" />
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
