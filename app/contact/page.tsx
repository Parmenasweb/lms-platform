import { CTA } from "./_components/cta";
import { ContactInfo } from "./_components/contact-info";
import { ContactHero } from "./_components/contact-hero";
import { ContactForm } from "./_components/contact-form";
import { FAQ } from "./_components/faqs";
import { LocationMap } from "./_components/location-map";
import Footer from "@/components/landingcomps/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <ContactHero />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
        <FAQ />
        <LocationMap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
