import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Trash2, FileVideo, Youtube } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MediaItem {
  id: number;
  title: string;
  description?: string;
  fileUrl?: string;
  youtubeUrl?: string;
  mediaType: 'file' | 'youtube' | 'both';
  createdAt: string;
}

export function MediaManagement() {
  const [newMediaTitle, setNewMediaTitle] = useState("");
  const [newMediaDescription, setNewMediaDescription] = useState("");
  const [newMediaFileUrl, setNewMediaFileUrl] = useState("");
  const [newMediaYoutubeUrl, setNewMediaYoutubeUrl] = useState("");
  const [newMediaType, setNewMediaType] = useState<'file' | 'youtube' | 'both'>('file');
  const [dialogOpen, setDialogOpen] = useState(false);

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: mediaItems = [], isLoading, error } = useQuery({
    queryKey: ["media"],
    queryFn: async () => {
      const response = await fetch("/api/media");
      if (!response.ok) {
        throw new Error("Failed to fetch media items");
      }
      return response.json();
    },
  });

  const createMedia = useMutation({
    mutationFn: async (newMedia: Omit<MediaItem, "id" | "createdAt">) => {
      // Get JWT token from localStorage
      const token = localStorage.getItem('authToken');

      if (!token) {
        throw new Error("Authentication token not found. Please log in again.");
      }

      const response = await fetch("/api/media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(newMedia),
      });

      if (!response.ok) {
        throw new Error("Failed to create media item");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["media"] });
      toast({
        title: "Success",
        description: "Media item created successfully",
      });
      resetForm();
      setDialogOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteMedia = useMutation({
    mutationFn: async (id: number) => {
      // Get JWT token from localStorage
      const token = localStorage.getItem('authToken');

      if (!token) {
        throw new Error("Authentication token not found. Please log in again.");
      }

      const response = await fetch(`/api/media/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete media item");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["media"] });
      toast({
        title: "Success",
        description: "Media item deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleCreateMedia = () => {
    // Validate required fields
    if (!newMediaTitle) {
      toast({
        title: "Error",
        description: "Title is required",
        variant: "destructive",
      });
      return;
    }

    // Validate media type
    if (newMediaType === 'file' && !newMediaFileUrl) {
      toast({
        title: "Error",
        description: "File URL is required for file type",
        variant: "destructive",
      });
      return;
    }

    if (newMediaType === 'youtube' && !newMediaYoutubeUrl) {
      toast({
        title: "Error",
        description: "YouTube URL is required for YouTube type",
        variant: "destructive",
      });
      return;
    }

    if (newMediaType === 'both' && (!newMediaFileUrl || !newMediaYoutubeUrl)) {
      toast({
        title: "Error",
        description: "Both File URL and YouTube URL are required for 'both' type",
        variant: "destructive",
      });
      return;
    }

    createMedia.mutate({
      title: newMediaTitle,
      description: newMediaDescription || undefined,
      fileUrl: newMediaFileUrl || undefined,
      youtubeUrl: newMediaYoutubeUrl || undefined,
      mediaType: newMediaType,
    });
  };

  const resetForm = () => {
    setNewMediaTitle("");
    setNewMediaDescription("");
    setNewMediaFileUrl("");
    setNewMediaYoutubeUrl("");
    setNewMediaType('file');
  };

  const handleDeleteMedia = (id: number) => {
    if (window.confirm("Are you sure you want to delete this media item?")) {
      deleteMedia.mutate(id);
    }
  };

  function formatYouTubeEmbed(url: string) {
    if (!url) return '';

    // Handle YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }

    return url;
  }

  const renderMediaItem = (item: MediaItem) => {
    return (
      <Card key={item.id} className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{item.title}</span>
            <Button 
              variant="destructive" 
              size="icon" 
              onClick={() => handleDeleteMedia(item.id)}
              className="h-8 w-8"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardTitle>
          {item.description && <CardDescription>{item.description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {(item.mediaType === 'youtube' || item.mediaType === 'both') && item.youtubeUrl && (
              <div>
                <div className="flex items-center gap-2 font-semibold text-sm mb-2">
                  <Youtube className="h-4 w-4" />
                  <span>YouTube Video</span>
                </div>
                <div className="aspect-video">
                  <iframe
                    src={formatYouTubeEmbed(item.youtubeUrl)}
                    className="w-full h-full rounded-md"
                    allowFullScreen
                    title={`YouTube video - ${item.title}`}
                  ></iframe>
                </div>
              </div>
            )}

            {(item.mediaType === 'file' || item.mediaType === 'both') && item.fileUrl && (
              <div>
                <div className="flex items-center gap-2 font-semibold text-sm mb-2">
                  <FileVideo className="h-4 w-4" />
                  <span>File Link</span>
                </div>
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  {item.fileUrl}
                </a>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Added on {new Date(item.createdAt).toLocaleDateString()}
        </CardFooter>
      </Card>
    );
  };

  // Effect to check for authentication
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast({
        title: "Authentication Required",
        description: "Please log in to manage media resources.",
        variant: "destructive",
      });
    }
  }, [toast]);


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading media items: {(error as Error).message}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Media Library</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add New Media</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Media Item</DialogTitle>
              <DialogDescription>
                Upload file URLs or YouTube video links to share with your audience.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newMediaTitle}
                  onChange={(e) => setNewMediaTitle(e.target.value)}
                  placeholder="Enter media title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  value={newMediaDescription}
                  onChange={(e) => setNewMediaDescription(e.target.value)}
                  placeholder="Enter media description"
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mediaType">Media Type</Label>
                <Select 
                  value={newMediaType} 
                  onValueChange={(value) => setNewMediaType(value as 'file' | 'youtube' | 'both')}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select media type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="file">File Link</SelectItem>
                    <SelectItem value="youtube">YouTube Video</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(newMediaType === 'file' || newMediaType === 'both') && (
                <div className="grid gap-2">
                  <Label htmlFor="fileUrl">File URL</Label>
                  <Input
                    id="fileUrl"
                    value={newMediaFileUrl}
                    onChange={(e) => setNewMediaFileUrl(e.target.value)}
                    placeholder="Enter file URL"
                  />
                </div>
              )}

              {(newMediaType === 'youtube' || newMediaType === 'both') && (
                <div className="grid gap-2">
                  <Label htmlFor="youtubeUrl">YouTube URL</Label>
                  <Input
                    id="youtubeUrl"
                    value={newMediaYoutubeUrl}
                    onChange={(e) => setNewMediaYoutubeUrl(e.target.value)}
                    placeholder="Enter YouTube video URL"
                  />
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateMedia}>
                Add Media
              </Button>
            </DialogFooter>
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