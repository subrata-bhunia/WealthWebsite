import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/page-layout";

type Blog = {
  id: number;
  title: string;
  content: string;
  authorName: string;
  createdAt: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await apiRequest("GET", "/api/blogs");
        data.json().then((res) => setBlogs(res));
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load blogs",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [toast]);

  if (loading) {
    return (
      <PageLayout
        title="Blog"
        subtitle="Latest insights and updates from our financial experts"
      >
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Blog"
      subtitle="Latest insights and updates from our financial experts"
    >
      {blogs.length === 0 ? (
        <div className="text-center p-12">
          <h3 className="text-xl font-medium">No blog posts yet</h3>
          <p className="text-muted-foreground mt-2">
            Check back soon for new content.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card key={blog.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  By {blog.authorName} •{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="line-clamp-4">{blog.content}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/blog/${blog.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
