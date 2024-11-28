import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@prisma/client";

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.featuredImage || "/placeholder.jpg"}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="line-clamp-3 text-gray-600 dark:text-gray-300"
                dangerouslySetInnerHTML={{
                  __html: post.content.substring(0, 25) + "...",
                }}
              />
            </CardContent>
            <CardFooter>
              <Link
                href={`/blogs/${post.id}`}
                className="text-primary hover:underline"
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
