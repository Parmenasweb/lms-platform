import BlogPostForm from "../../_components/blog-form";
import prisma from "@/lib/db";

export default async function EditPost({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Edit Blog Post</h1>
      <BlogPostForm initialData={post} />
    </div>
  );
}
