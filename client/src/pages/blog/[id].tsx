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
};

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:id");
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

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

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-12 pt-24">
        <Button variant="outline" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>

        <article className="prose lg:prose-xl mx-auto">
          <h1>{blog.title}</h1>
          <div className="text-muted-foreground mb-8">
            By {blog.authorName} •{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </div>

          {/* Render blog content - in a real app, you might use a rich text editor */}
          {blog?.content
            ?.split("\n")
            .map((paragraph, index) =>
              paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
            )}
        </article>
      </div>
    </div>
  );
}
