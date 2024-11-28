import Image from "next/image";

export function LocationMap() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Location
        </h2>
        <div className="aspect-video rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Map of TechFix Academy location"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
