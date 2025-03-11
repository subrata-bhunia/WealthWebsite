import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/page-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileVideo, Youtube } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MediaItem {
  id: number;
  title: string;
  description?: string;
  fileUrl?: string;
  youtubeUrl?: string;
  mediaType: "file" | "youtube" | "both";
  createdAt: string;
}

export default function MediaPage() {
  const {
    data: mediaItems = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["media"],
    queryFn: async () => {
      const response = await fetch("/api/media");
      if (!response.ok) {
        throw new Error("Failed to fetch media items");
      }
      return response.json();
    },
  });

  function formatYouTubeEmbed(url: string) {
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

  // Filter media by type
  const youtubeMedia = mediaItems.filter(
    (item) =>
      item.mediaType === "youtube" ||
      (item.mediaType === "both" && item.youtubeUrl),
  );

  const fileMedia = mediaItems.filter(
    (item) =>
      item.mediaType === "file" || (item.mediaType === "both" && item.fileUrl),
  );

  return (
    <PageLayout
      title="Media Resources"
      subtitle="Explore our curated collection of helpful videos and resources."
    >
      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="text-center">Loading media resources...</div>
        ) : error ? (
          <div className="text-center text-red-500">
            Error loading media: {(error as Error).message}
          </div>
        ) : mediaItems.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground">
            No media resources available yet. Please check back soon!
          </div>
        ) : (
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="all">All Media</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaItems.map((item) => (
                  <Card key={item.id} className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      {item.description && (
                        <CardDescription>{item.description}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="flex-grow">
                      {item.youtubeUrl &&
                        (item.mediaType === "youtube" ||
                          item.mediaType === "both") && (
                          <div className="mb-4">
                            <div className="flex items-center gap-2 font-semibold text-sm mb-2">
                              <Youtube className="h-4 w-4" />
                              <span>Video</span>
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

                      {item.fileUrl &&
                        (item.mediaType === "file" ||
                          item.mediaType === "both") && (
                          <div>
                            <div className="flex items-center gap-2 font-semibold text-sm mb-2">
                              <FileVideo className="h-4 w-4" />
                              <span>Resource</span>
                            </div>
                            <a
                              href={item.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline break-all"
                            >
                              View Resource
                            </a>
                          </div>
                        )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {youtubeMedia.length === 0 ? (
                  <div className="col-span-full text-center py-10 text-muted-foreground">
                    No video resources available yet.
                  </div>
                ) : (
                  youtubeMedia.map((item) => (
                    <Card key={item.id} className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        {item.description && (
                          <CardDescription>{item.description}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="aspect-video">
                          <iframe
                            src={formatYouTubeEmbed(item.youtubeUrl!)}
                            className="w-full h-full rounded-md"
                            allowFullScreen
                            title={`YouTube video - ${item.title}`}
                          ></iframe>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fileMedia.length === 0 ? (
                  <div className="col-span-full text-center py-10 text-muted-foreground">
                    No file resources available yet.
                  </div>
                ) : (
                  fileMedia.map((item) => (
                    <Card key={item.id} className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        {item.description && (
                          <CardDescription>{item.description}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex items-center gap-2 font-semibold text-sm mb-2">
                          <FileVideo className="h-4 w-4" />
                          <span>Resource</span>
                        </div>
                        <a
                          href={item.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline break-all"
                        >
                          View Resource
                        </a>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </PageLayout>
  );
}
