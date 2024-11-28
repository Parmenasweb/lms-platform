"use client";

import { useState, useEffect } from "react";
import { BlogHero } from "./_components/blog-hero";
import { FeaturedPost } from "./_components/featured-posts";
import { BlogGrid } from "./_components/blog-grid";
import { CategoryFilter } from "./_components/category-filter";
import { Pagination } from "./_components/pagination";
import { NewsletterSignup } from "./_components/newsletter";
import Footer from "@/components/landingcomps/Footer";
import Header from "@/components/landingcomps/Header";

const categories = [
  "Tools",
  "Hardware",
  "Software",
  "Data Recovery",
  "Industry News",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<any[]>([]);
  const postsPerPage = 6;
  const featuredPost = posts?.[0];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog-post");
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setPosts([]); // Set empty posts array on error
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post?.category === activeCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <BlogHero />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Featured Post
            </h2>
            {featuredPost && <FeaturedPost {...featuredPost} />}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Latest Posts
            </h2>
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <BlogGrid posts={currentPosts} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
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
