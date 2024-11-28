import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Need Immediate Assistance?
          </h2>
          <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
            Our support team is available 24/7 to help you with any urgent
            inquiries.
          </p>
          <Button size="lg" variant="secondary">
            Chat with Support
          </Button>
        </div>
      </div>
    </section>
  );
}
