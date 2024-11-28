import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface PostHeroProps {
  title: string;
  category: string;
  date: string;
  author: string;
  featuredImage: string;
}

export function PostHero({
  title,
  category,
  date,
  author,
  featuredImage,
}: PostHeroProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={featuredImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-3xl">
            {title}
          </h1>
          <div className="flex items-center space-x-4 text-sm">
            <span>{date}</span>
            <span>•</span>
            <span>By {author}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
