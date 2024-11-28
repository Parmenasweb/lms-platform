"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Comment } from "@prisma/client";
import axios from "axios";

interface CommentsSectionProps {
  comments: Comment[];
  id: string;
}

export function CommentsSection({
  comments: initialComments,
  id,
}: CommentsSectionProps) {
  const { user } = useUser();
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [id]);

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/blog-post/comments?id=${id}`);
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
      setError("Failed to load comments. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user) {
      setError("You need to be logged in to post a comment.");
      return;
    }

    if (!newComment.trim()) {
      setError("Comment cannot be empty.");
      return;
    }

    setIsLoading(true);
    try {
      const comment: Omit<Comment, "id"> = {
        author: user.fullName || "Anonymous",
        content: newComment,
        date: new Date(),
        postId: id,
      };

      await axios.post("/api/blog-post/comments", comment, {
        headers: { "Content-Type": "application/json" },
      });

      setNewComment("");
      await fetchComments(); // Refresh comments after posting
    } catch (error) {
      console.error("Failed to post comment:", error);
      setError("Failed to post comment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          You need to be logged in to post a comment.
        </p>
        <Button variant="outline" asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment..."
          className="mb-2"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Posting..." : "Post Comment"}
        </Button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
      {isLoading ? (
        <p>Loading comments...</p>
      ) : (
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="flex space-x-4">
                <Avatar>
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{comment.author}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-1">{comment.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      )}
    </section>
  );
}
