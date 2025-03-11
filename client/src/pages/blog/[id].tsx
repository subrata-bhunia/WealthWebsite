import React, { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Blog = {
  id: number;
  title: string;
  content: string;
  authorName: string;
  createdAt: string;
  image?: string;
};

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:id");
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params?.id) return;

      try {
        const data = await apiRequest("GET", `/api/blogs/${params.id}`);
        data.json().then((res) => setBlog(res));
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load blog post",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params?.id, toast]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 pt-24">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 pt-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  // Add required CSS for rich text content
  useEffect(() => {
    // Add a class to style the content properly
    const style = document.createElement("style");
    style.innerHTML = `
      .rich-content img { max-width: 100%; height: auto; margin: 1rem 0; }
      .rich-content h1 { font-size: 2rem; font-weight: bold; margin: 1rem 0; }
      .rich-content h2 { font-size: 1.5rem; font-weight: bold; margin: 1rem 0; }
      .rich-content h3 { font-size: 1.25rem; font-weight: bold; margin: 1rem 0; }
      .rich-content p { margin: 1rem 0; }
      .rich-content ul, .rich-content ol { margin: 1rem 0; padding-left: 2rem; }
      .rich-content blockquote { border-left: 4px solid #e5e7eb; padding-left: 1rem; margin: 1rem 0; font-style: italic; }
      .rich-content a { color: #2563eb; text-decoration: underline; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-12 pt-24">
        <Button variant="outline" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
        {/* Thumbnail with Title and Gradient */}
        {blog.image && (
          <div className="relative mb-8 w-full mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-md"></div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 rounded-md object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h1 className="text-2xl font-bold">{blog.title}</h1>
              <p className="text-base text-gray-300">
                By {blog.authorName} •{" "}
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}

        <article
          className="prose lg:prose-xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: blog.content.replace("/n", "<br />"),
          }}
        >
          {/* Render rich HTML content */}
          <div
            className="rich-content mt-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </div>
    </div>
  );
}
