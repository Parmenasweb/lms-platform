"use client";

import { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";
import { PostHero } from "./_components/post-hero";
import { ArticleContent } from "./_components/article-content";
import { AuthorInfo } from "./_components/author-info";
import { RelatedPosts } from "./_components/related-posts";
import { CommentsSection } from "./_components/comment-section";
import { ShareButtons } from "./_components/share";
import { TableOfContents } from "./_components/table-of-contents";
import { ReadingProgress } from "./_components/Reading-Progress";
import { NewsletterSignup } from "../_components/newsletter";
import Footer from "@/components/landingcomps/Footer";
import Header from "@/components/landingcomps/Header";
import { Post } from "@prisma/client";
import { Comment } from "@prisma/client";

const authorInfo = {
  name: "wepz computers",
  bio: "As CEO of WePZ Computers and a seasoned tech expert, I bring 15+ years of hands-on experience in computer repair and IT solutions. My mission is to make tech education accessible and empower others to master the craft of electronics repair.",
  avatar: "/wepz.webp",
};

export default function BlogPostPage() {
  const params = useParams();
  const id = params.id as string;
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComment] = useState<Comment[]>([]);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/blog-post/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          if (data.error) {
            throw new Error(data.error);
          }
          setPost(data);
          fetchRelatedPosts(data.category);
          fetchComments();
        } catch (error) {
          console.error("Error fetching blog post:", error);
          setError(
            `Failed to load blog post: ${
              error instanceof Error ? error.message : String(error)
            }`
          );
          setPost(null);
        }
      };
      fetchPost();
    }
  }, [id]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/blog-post/comments`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setComment(data);
    } catch (error) {
      console.error("Error fetching related posts:", error);
      setError(
        `Failed to load related posts: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      setComment([]);
    }
  };
  const fetchRelatedPosts = async (category: string) => {
    try {
      const response = await fetch(`/api/blog-post?category=${category}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setRelatedPosts(data);
    } catch (error) {
      console.error("Error fetching related posts:", error);
      setError(
        `Failed to load related posts: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      setRelatedPosts([]);
    }
  };

  const handleErrorDismiss = () => {
    redirect("/blogs");
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{error}</p>
          <button
            onClick={handleErrorDismiss}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Dismiss
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors ml-4"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!post)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading post...
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ReadingProgress />
      <main className="flex-1">
        <PostHero
          title={post.title}
          category={post.category}
          date={new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          author={post.author}
          featuredImage={post.featuredImage || ""}
        />
        {/* <TableOfContents content={post.content} /> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <ArticleContent content={post.content} />
            <ShareButtons
              url={`https://wepzacademy.com/blog/${post.slug}`}
              title={post.title}
            />
            <AuthorInfo {...authorInfo} />
            <CommentsSection comments={comments} id={id} />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold">Related Posts</h2>
            <RelatedPosts
              posts={relatedPosts.map((post) => ({
                ...post,
                excerpt: post.content.substring(0, 100) + "...",
                image: post.featuredImage || "/placeholder.svg",
              }))}
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <NewsletterSignup />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
