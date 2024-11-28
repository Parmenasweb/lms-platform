import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LogoClouds() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:grid-cols-[1fr_1fr] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Leading Tech Brands
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide certified repair training for all major technology
                brands. Learn from industry experts and get hands-on experience
                with the latest devices and gadgets.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/dashboard/search">Start Learning</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {[
              {
                name: "Apple",
                logo: "https://cdn-icons-png.flaticon.com/128/2175/2175370.png",
              },
              {
                name: "Dell",
                logo: "https://cdn-icons-png.flaticon.com/128/882/882624.png",
              },
              {
                name: "HP",
                logo: "https://cdn-icons-png.flaticon.com/128/882/882749.png",
              },
              {
                name: "Lenovo",
                logo: "https://cdn-icons-png.flaticon.com/128/882/882717.png",
              },
              {
                name: "Microsoft",
                logo: "https://cdn-icons-png.flaticon.com/128/732/732221.png",
              },
              {
                name: "Asus",
                logo: "https://cdn-icons-png.flaticon.com/128/5969/5969052.png",
              },
              {
                name: "Acer",
                logo: "https://cdn-icons-png.flaticon.com/128/882/882748.png",
              },
            ].map((brand) => (
              <div
                key={brand.name}
                className="relative flex h-20 items-center justify-center rounded-lg border bg-background p-4 dark:bg-gray-900"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="object-contain w-full h-full"
                  width={100}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
