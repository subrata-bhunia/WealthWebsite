
import { PageTemplate } from "@/components/ui/page-template";
import { useState, useEffect } from "react";

interface MediaItem {
  id: number;
  title: string;
  description: string;
  mediaType: string;
  url: string;
  thumbnailUrl: string;
  publishedAt: string;
}

export default function Media() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    async function fetchMedia() {
      try {
        const response = await fetch('/api/media');
        if (response.ok) {
          const data = await response.json();
          setMediaItems(data);
        }
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMedia();
  }, []);

  // This is a placeholder until we have real data
  const dummyData: MediaItem[] = [
    {
      id: 1,
      title: "Understanding Market Volatility",
      description: "Our financial expert discusses strategies for navigating market volatility in uncertain economic times.",
      mediaType: "video",
      url: "https://www.youtube.com/watch?v=example1",
      thumbnailUrl: "https://via.placeholder.com/600x400",
      publishedAt: "2023-11-15T10:30:00.000Z"
    },
    {
      id: 2,
      title: "Retirement Planning Essentials",
      description: "Listen to our podcast on essential strategies for effective retirement planning.",
      mediaType: "audio",
      url: "https://soundcloud.com/example/retirement-planning",
      thumbnailUrl: "https://via.placeholder.com/600x400",
      publishedAt: "2023-10-22T14:15:00.000Z"
    },
    {
      id: 3,
      title: "Investment Outlook 2024",
      description: "Download our comprehensive report on investment trends and opportunities for 2024.",
      mediaType: "document",
      url: "/documents/investment-outlook-2024.pdf",
      thumbnailUrl: "https://via.placeholder.com/600x400",
      publishedAt: "2023-12-05T09:00:00.000Z"
    }
  ];

  const displayItems = mediaItems.length > 0 ? mediaItems : dummyData;
  const filteredItems = activeTab === 'all' 
    ? displayItems 
    : displayItems.filter(item => item.mediaType === activeTab);

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
      title="Media Center" 
      description="Videos, podcasts, reports, and other media resources on financial topics."
    >
      <div className="mb-8 border-b">
        <div className="flex space-x-4">
          <button 
            onClick={() => setActiveTab('all')}
            className={`pb-2 px-4 ${activeTab === 'all' ? 'border-b-2 border-primary font-medium text-primary' : 'text-gray-600'}`}
          >
            All Media
          </button>
          <button 
            onClick={() => setActiveTab('video')}
            className={`pb-2 px-4 ${activeTab === 'video' ? 'border-b-2 border-primary font-medium text-primary' : 'text-gray-600'}`}
          >
            Videos
          </button>
          <button 
            onClick={() => setActiveTab('audio')}
            className={`pb-2 px-4 ${activeTab === 'audio' ? 'border-b-2 border-primary font-medium text-primary' : 'text-gray-600'}`}
          >
            Podcasts
          </button>
          <button 
            onClick={() => setActiveTab('document')}
            className={`pb-2 px-4 ${activeTab === 'document' ? 'border-b-2 border-primary font-medium text-primary' : 'text-gray-600'}`}
          >
            Documents
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {item.mediaType === 'video' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      <path d="M14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                    </svg>
                  )}
                  {item.mediaType === 'audio' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {item.mediaType === 'document' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  )}
                  <p className="text-sm text-gray-500">{formatDate(item.publishedAt)}</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary font-medium hover:underline"
                >
                  {item.mediaType === 'video' ? 'Watch Video' : 
                   item.mediaType === 'audio' ? 'Listen to Podcast' :
                   'Download Document'}
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No media items found</h3>
          <p className="text-gray-600">Check back soon for new content.</p>
        </div>
      )}
    </PageTemplate>
  );
}
