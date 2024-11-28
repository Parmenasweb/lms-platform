import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeaturedPostProps {
  title: string;
  content: string;
  category: string;
  date: string;
  author: string;
  featuredImage: string;
  id: string;
}

export function FeaturedPost({
  title,
  content,
  category,
  date,
  author,
  featuredImage,
  id,
}: FeaturedPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden">
        <div className="relative h-64 sm:h-80">
          <Image
            src={featuredImage}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <Badge variant="secondary">{category}</Badge>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="text-gray-600 dark:text-gray-300 line-clamp-3 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{
              __html:
                content.substring(0, 40) + (content.length > 40 ? "..." : ""),
            }}
          />
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="text-sm text-gray-500">By {author}</span>
          <Button asChild>
            <Link href={`/blogs/${id}`}>Read More</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
