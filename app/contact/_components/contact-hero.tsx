"use client";
import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Get in Touch
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl mt-4">
              We&apos;re here to help. Reach out to us for any questions,
              support, or feedback.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
