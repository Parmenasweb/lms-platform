"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import Image from "next/image";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Post } from "@prisma/client";

interface BlogPostFormProps {
  initialData?: Post;
}

const categories = [
  "Tools",
  "Hardware",
  "Software",
  "Data Recovery",
  "Industry News",
  "Tutorials",
  "Case Studies",
];

export default function BlogPostForm({ initialData }: BlogPostFormProps) {
  const router = useRouter();
  const editorRef: any = useRef();
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      content: "",
      slug: "",
      author: "",
      category: "",
      featuredImage: "",
    }
  );
  const [featuredImagePreview, setFeaturedImagePreview] = useState<
    string | null
  >(null);
  const [errorState, setErrorState] = useState<string | null>(null);
  const [successState, setSuccessState] = useState<string | null>(null);

  useEffect(() => {
    if (formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  }, [formData.title]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    imageType: "featured" | "content"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (imageType === "featured") {
          setFormData((prev) => ({
            ...prev,
            featuredImage: reader.result as string,
          }));
          setFeaturedImagePreview(reader.result as string);
        } else {
          const imageTag = `![${file.name}](${reader.result})`;
          const textarea = document.getElementById(
            "content"
          ) as HTMLTextAreaElement;
          const cursorPosition = textarea.selectionStart;
          const textBefore = formData.content.substring(0, cursorPosition);
          const textAfter = formData.content.substring(cursorPosition);
          setFormData((prev) => ({
            ...prev,
            content: textBefore + imageTag + textAfter,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = initialData?.id
      ? `/api/blog-post/${initialData.id}`
      : "/api/blog-post";
    const method = initialData?.id ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessState("Post saved successfully!");
        setErrorState(null);
        router.push("/dashboard/teacher/blogs");
      } else {
        setErrorState("Failed to save post");
        setSuccessState(null);
      }
    } catch (error) {
      setErrorState("Error saving post ");
      setSuccessState(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <div className="space-y-4 sm:space-y-6">
        <div>
          <Label htmlFor="title" className="text-gray-700 dark:text-gray-300">
            Title
          </Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full mt-1 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <Label htmlFor="slug" className="text-gray-700 dark:text-gray-300">
            Slug
          </Label>
          <Input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
            className="w-full mt-1 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <Label htmlFor="author" className="text-gray-700 dark:text-gray-300">
            Author
          </Label>
          <Input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full mt-1 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <Label
            htmlFor="category"
            className="text-gray-700 dark:text-gray-300"
          >
            Category
          </Label>
          <Select
            name="category"
            value={formData.category}
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger className="w-full mt-1 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label
            htmlFor="featuredImage"
            className="text-gray-700 dark:text-gray-300"
          >
            Featured Image
          </Label>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-1">
            <Input
              type="file"
              id="featuredImage"
              name="featuredImage"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "featured")}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("featuredImage")?.click()}
              className="w-full sm:w-auto bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Image
            </Button>
            {featuredImagePreview && (
              <div className="relative w-full sm:w-20 h-20">
                <Image
                  src={featuredImagePreview}
                  alt="Featured image preview"
                  className="object-cover w-full h-full rounded"
                  layout="fill"
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="content" className="text-gray-700 dark:text-gray-300">
            Content
          </Label>
          <div className="mt-1">
            <Editor
              ref={editorRef}
              initialValue="write your posts here"
              previewStyle="vertical"
              height="300px"
              initialEditType="wysiwyg"
              useCommandShortcut={true}
              onChange={() =>
                setFormData((prev) => ({
                  ...prev,
                  content: editorRef.current.getInstance().getHTML(),
                }))
              }
              className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      {errorState && (
        <div className="text-red-500 text-center mt-4">
          <p>{errorState}</p>
        </div>
      )}
      {successState && (
        <div className="text-green-500 text-center mt-4">
          <p>{successState}</p>
        </div>
      )}

      <Button
        type="submit"
        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
      >
        {initialData?.id ? "Update Post" : "Create Post"}
      </Button>
    </form>
  );
}
