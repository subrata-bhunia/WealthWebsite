//@ts-nocheck
import React, { useEffect, useState } from "react";
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
import { Trash2, Plus, Save, Pencil } from "lucide-react";
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
import ReactQuill from "react-quill";

type Blog = {
  id: number;
  title: string;
  content: string;
  authorName: string;
  image: string;
  createdAt: string;
  short_desc: string;
};

export const authFetch = async (url: string, options?: RequestInit) => {
  const token = localStorage.getItem("wealthspire_auth_token");
  const headers = {
    ...(options?.headers || {}),
    Authorization: token ? `Bearer ${token}` : undefined,
  };
  // @ts-ignore
  return fetch("https://wealth-backend-production.up.railway.app" + url, {
    ...options,
    headers,
  });
};

const RichTextEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (content: string) => void;
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["image", "link"],
      ["list", "blockquote", "code-block"],
    ],
  };
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      theme="snow"
      className="max-h-[50vh] overflow-x-scroll"
    />
  );
};

export function BlogManagement() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newBlog, setNewBlog] = useState<Omit<Blog, "id" | "createdAt">>({
    title: "",
    content: "",
    authorName: "",
    image: "",
    short_desc: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedBlog, setEditedBlog] = useState<Blog | null>(null);
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
        id: "1",
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
      toast({
        title: "Success",
        description: "Blog post created successfully",
        id: "1",
      });
      setNewBlog({ title: "", content: "", authorName: "", image: "" });
      setDialogOpen(false);
      fetchBlogs();
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Failed to create blog post: ${error.message}`,
        variant: "destructive",
        id: "1",
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
        id: "1",
      });
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Failed to delete blog post: ${error?.message}`,
        variant: "destructive",
        id: "1",
      });
    }
  };

  const handleEditBlog = (blog: Blog) => {
    setEditedBlog(blog);
    setNewBlog(blog); // Populate the form with existing data
    setIsEditMode(true);
    setDialogOpen(true); // Open the dialog when edit button is clicked
  };

  const handleUpdateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement update logic here using authFetch and editedBlog
    try {
      const response = await authFetch(`/api/blogs/${editedBlog?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update blog post");
      }
      setIsEditMode(false);
      setEditedBlog(null);
      setNewBlog({ title: "", content: "", authorName: "", image: "" });
      setDialogOpen(false); // Close dialog after update
      toast({
        title: "Success",
        description: "Blog post updated successfully",
        id: "1",
      });
      fetchBlogs();
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Failed to update blog post: ${error.message}`,
        variant: "destructive",
        id: "1",
      });
    }
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    setEditedBlog(null);
    setNewBlog({ title: "", content: "", authorName: "", image: "" });
    setDialogOpen(false); // Close dialog on cancel
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
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          {/* Use dialogOpen state */}
          <DialogTrigger asChild>
            <Button onClick={() => setDialogOpen(true)}>
              {/* Open dialog on button click */}
              <Plus className="mr-2 h-4 w-4" /> Create New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>
                {isEditMode ? "Edit Blog Post" : "Create New Blog Post"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={isEditMode ? handleUpdateBlog : handleSubmit}>
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
                  <Label htmlFor="author">Short Description</Label>
                  <Input
                    id="short_desc"
                    value={newBlog.short_desc}
                    onChange={(e) =>
                      setNewBlog({ ...newBlog, short_desc: e.target.value })
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
                  <div className="border rounded-md">
                    <RichTextEditor
                      value={newBlog.content}
                      onChange={(content) =>
                        setNewBlog({ ...newBlog, content })
                      }
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancelEdit}
                  >
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card key={blog.id} className="flex flex-col">
              {blog.image && (
                <div
                  className="h-40 w-full bg-cover bg-center rounded-t-md"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />
              )}
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span className="truncate">{blog.title}</span>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEditBlog(blog)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(blog.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  By {blog.authorName} •{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>
              </CardHeader>
              <CardContent
                className="line-clamp-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              <CardFooter className="flex justify-end"></CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
