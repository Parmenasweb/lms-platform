import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  author: string;
  featuredImage: string;
  slug: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full flex flex-col">
            <div className="relative h-48">
              <Image
                src={post.featuredImage}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div
                className="text-gray-600 dark:text-gray-300 line-clamp-2 prose "
                dangerouslySetInnerHTML={{
                  __html:
                    post.content.substring(0, 30) +
                    (post.content.length > 30 ? "..." : ""),
                }}
              />
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-gray-500">By {post.author}</span>
              <Link
                href={`/blogs/${post.id}`}
                className="text-primary hover:underline"
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
