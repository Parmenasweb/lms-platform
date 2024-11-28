import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Wepz Academy Blog
          </h1>
          <p className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl">
            Stay updated with the latest trends, tips, and insights in tech
            repair and IT education.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
