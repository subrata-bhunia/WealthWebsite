import React, { useEffect, useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Edit, Plus, Save } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type Blog = {
  id: number;
  title: string;
  content: string;
  authorName: string;
  createdAt: string;
};

export const authFetch = async (url: string, options?: RequestInit) => {
  const token = localStorage.getItem("wealthspire_auth_token");
  const headers = {
    ...(options?.headers || {}),
    Authorization: token ? `Bearer ${token}` : undefined,
  };
  // @ts-ignore
  return fetch(url, { ...options, headers });
};

export function BlogManagement() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    authorName: "",
    image: "",
  });
  const { toast } = useToast();

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await authFetch("/api/blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      setBlogs(data);
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

  useEffect(() => {
    fetchBlogs();
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authFetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create blog post");
      }
      setNewBlog({ title: "", content: "", authorName: "", image: "" });
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
      fetchBlogs();
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Failed to create blog post: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this blog post?"))
      return;

    try {
      const response = await authFetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete blog post");
      }
      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      });
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Failed to delete blog post: ${error?.message}`,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Create New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newBlog.title}
                    onChange={(e) =>
                      setNewBlog({ ...newBlog, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="author">Author Name</Label>
                  <Input
                    id="author"
                    value={newBlog.authorName}
                    onChange={(e) =>
                      setNewBlog({ ...newBlog, authorName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">Thumbnail URL</Label>
                  <Input
                    id="image"
                    value={newBlog.image}
                    onChange={(e) =>
                      setNewBlog({ ...newBlog, image: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={newBlog.content}
                    onChange={(e) =>
                      setNewBlog({ ...newBlog, content: e.target.value })
                    }
                    rows={10}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" /> Save Post
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center p-12">
          <h3 className="text-xl font-medium">No blog posts yet</h3>
          <p className="text-muted-foreground mt-2">
            Create your first blog post to get started.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <Card key={blog.id}>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  By {blog.authorName} •{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-4">{blog.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(blog.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={`/blog/${blog.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Edit className="mr-2 h-4 w-4" /> View/Edit
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
