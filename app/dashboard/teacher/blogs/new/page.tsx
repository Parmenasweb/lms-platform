import BlogPostForm from "../_components/blog-form";

export default function NewPost() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
        Create New Blog Post
      </h1>
      <div className="w-full max-w-4xl mx-auto">
        <BlogPostForm />
      </div>
    </div>
  );
}
