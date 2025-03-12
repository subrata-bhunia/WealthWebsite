import { useEffect, useState } from "react";
import { Link } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageLayout } from "@/components/layout/page-layout";

type Blog = {
  id: number;
  title: string;
  content: string;
  authorName: string;
  createdAt: string;
  image?: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
          id: "1",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [toast]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="flex flex-col h-full">
              {blog.image && (
                <div
                  className="h-48 w-full bg-cover bg-center rounded-t-md"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  By {blog.authorName} •{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>
              </CardHeader>
              <CardContent
                className="line-clamp-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              
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
import { PageTemplate } from "@/components/ui/page-template";
import { useState, useEffect } from "react";
import { Link } from "wouter";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  publishedAt: string;
  author: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('/api/blogs');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return (
    <PageTemplate 
      title="Blog" 
      description="Insights, tips, and updates on wealth management, investments, and financial planning."
    >
      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="border rounded-lg overflow-hidden shadow-sm">
              {blog.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {formatDate(blog.publishedAt)} • {blog.author}
                </p>
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">
                  {blog.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
                </p>
                <Link href={`/blog/${blog.id}`}>
                  <span className="text-primary font-medium hover:underline">Read More</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No blog posts found</h3>
          <p className="text-gray-600">Check back soon for new articles and insights.</p>
        </div>
      )}
    </PageTemplate>
  );
}
