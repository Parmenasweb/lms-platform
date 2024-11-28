"use client";

import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 dark:text-white">
          What Our Students Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The courses at TechFix Academy have been instrumental in
                advancing my career in tech repair. Highly recommended!
              </p>
              <div className="flex items-center mt-auto">
                <Image
                  alt="Student Avatar"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg"
                  style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  width="40"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium dark:text-white">
                    Jane Doe
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Certified Laptop Technician
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
