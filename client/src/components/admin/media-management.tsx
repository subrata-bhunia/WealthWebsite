import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Save, Trash, Youtube, File, Edit } from "lucide-react";
import { authFetch } from "@/components/admin/blog-management";
import { RichTextEditor } from "./rich-text-editor";
import "react-quill/dist/quill.snow.css";

type MediaItem = {
  id: number;
  title: string;
  description?: string;
  fileUrl?: string;
  youtubeUrl?: string;
  mediaType: "file" | "youtube" | "both";
  createdAt: string;
};

export function MediaManagement() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newMedia, setNewMedia] = useState<Partial<MediaItem>>({
    title: "",
    description: "",
    fileUrl: "",
    youtubeUrl: "",
    mediaType: "file",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedMedia, setEditedMedia] = useState<MediaItem | null>(null);
  const { toast } = useToast();

  const fetchMediaItems = async () => {
    setLoading(true);
    try {
      const response = await authFetch("/api/media");
      if (!response.ok) {
        throw new Error("Failed to fetch media items");
      }
      const data = await response.json();
      setMediaItems(data);
    } catch (error) {
      toast({
        id: "1",
        title: "Error",
        description: "Failed to load media items",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  function formatYouTubeEmbed(url?: string) {
    if (!url) return "";

    // Handle YouTube URLs
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }

    return url;
  }
  useEffect(() => {
    fetchMediaItems();
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authFetch("/api/media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMedia),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create media item");
      }
      setNewMedia({
        title: "",
        description: "",
        fileUrl: "",
        youtubeUrl: "",
        mediaType: "file",
      });
      setDialogOpen(false);
      toast({
        id: "1",
        title: "Success",
        description: "Media item created successfully",
      });
      fetchMediaItems();
    } catch (error: any) {
      toast({
        id: "1",
        title: "Error",
        description: `Failed to create media item: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const handleUpdateMedia = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authFetch(`/api/media/${editedMedia?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMedia),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update media item");
      }
      setIsEditMode(false);
      setEditedMedia(null);
      setNewMedia({
        title: "",
        description: "",
        fileUrl: "",
        youtubeUrl: "",
        mediaType: "file",
      });
      setDialogOpen(false);
      toast({
        id: "1",
        title: "Success",
        description: "Media item updated successfully",
      });
      fetchMediaItems();
    } catch (error: any) {
      toast({
        id: "1",
        title: "Error",
        description: `Failed to update media item: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this media item?")) {
      try {
        const response = await authFetch(`/api/media/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete media item");
        }
        toast({
          id: "1",
          title: "Success",
          description: "Media item deleted successfully",
        });
        fetchMediaItems();
      } catch (error) {
        toast({
          id: "1",
          title: "Error",
          description: "Failed to delete media item",
          variant: "destructive",
        });
      }
    }
  };

  const handleEdit = (media: MediaItem) => {
    setIsEditMode(true);
    setEditedMedia(media);
    setNewMedia({
      title: media.title,
      description: media.description || "",
      fileUrl: media.fileUrl || "",
      youtubeUrl: media.youtubeUrl || "",
      mediaType: media.mediaType,
    });
    setDialogOpen(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    setEditedMedia(null);
    setNewMedia({
      title: "",
      description: "",
      fileUrl: "",
      youtubeUrl: "",
      mediaType: "file",
    });
    setDialogOpen(false);
  };

  const renderMediaItem = (media: MediaItem) => {
    return (
      <Card key={media.id} className="mb-4">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{media.title}</span>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleEdit(media)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleDelete(media.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {media.description && (
              <div>
                <h4 className="text-sm font-medium mb-1">Description:</h4>
                <div
                  className="text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: media.description }}
                />
              </div>
            )}
            <div className="flex space-x-2 mt-2">
              {media.mediaType === "file" || media.mediaType === "both" ? (
                <div className="flex items-center">
                  <File className="h-4 w-4 mr-1" />
                  <a
                    href={media.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    View File
                  </a>
                </div>
              ) : null}
              {media.mediaType === "youtube" || media.mediaType === "both" ? (
                <div className="mb-4">
                  <div className="flex items-center">
                    <Youtube className="h-4 w-4 mr-1" />
                    <span>Video</span>
                    {/* <a
                    href={media.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Watch Video
                  </a> */}
                  </div>
                  <div className="aspect-video">
                    <iframe
                      src={formatYouTubeEmbed(media.youtubeUrl)}
                      className="w-full h-full rounded-md"
                      allowFullScreen
                      title={`YouTube video - ${media.title}`}
                    ></iframe>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground">
            Added on {new Date(media.createdAt).toLocaleDateString()}
          </p>
        </CardFooter>
      </Card>
    );
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
        <h2 className="text-2xl font-bold">Media Library</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Media
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {isEditMode ? "Edit Media Item" : "Add New Media"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={isEditMode ? handleUpdateMedia : handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newMedia.title}
                    onChange={(e) =>
                      setNewMedia({ ...newMedia, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <div className="border rounded-md">
                    <RichTextEditor
                      value={newMedia.description || ""}
                      onChange={(content) =>
                        setNewMedia({ ...newMedia, description: content })
                      }
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="mediaType">Media Type</Label>
                  <select
                    id="mediaType"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={newMedia.mediaType}
                    onChange={(e) =>
                      setNewMedia({
                        ...newMedia,
                        mediaType: e.target.value as
                          | "file"
                          | "youtube"
                          | "both",
                      })
                    }
                    required
                  >
                    <option value="file">File URL</option>
                    <option value="youtube">YouTube URL</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                {(newMedia.mediaType === "file" ||
                  newMedia.mediaType === "both") && (
                  <div className="grid gap-2">
                    <Label htmlFor="fileUrl">File URL</Label>
                    <Input
                      id="fileUrl"
                      value={newMedia.fileUrl}
                      onChange={(e) =>
                        setNewMedia({ ...newMedia, fileUrl: e.target.value })
                      }
                      required={
                        newMedia.mediaType === "file" ||
                        newMedia.mediaType === "both"
                      }
                    />
                  </div>
                )}
                {(newMedia.mediaType === "youtube" ||
                  newMedia.mediaType === "both") && (
                  <div className="grid gap-2">
                    <Label htmlFor="youtubeUrl">YouTube URL</Label>
                    <Input
                      id="youtubeUrl"
                      value={newMedia.youtubeUrl}
                      onChange={(e) =>
                        setNewMedia({ ...newMedia, youtubeUrl: e.target.value })
                      }
                      required={
                        newMedia.mediaType === "youtube" ||
                        newMedia.mediaType === "both"
                      }
                    />
                  </div>
                )}
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
                  <Save className="mr-2 h-4 w-4" /> Save Media
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {mediaItems.length === 0 ? (
        <div className="text-center py-10 text-muted-foreground">
          No media items yet. Add some!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaItems.map(renderMediaItem)}
        </div>
      )}
    </div>
  );
}
