import React, { useState, useEffect } from "react";
import {  Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// Define types for YouTube API response items
interface YouTubeItem {
  id: { videoId: string };
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      default: { url: string };
    };
  };
}

// Define types for YouTube results
interface YouTubeResult {
  id: string;
  type: "youtube";
  title: string;
  channel: string;
  thumbnail: string;
}

const SearchResults: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<YouTubeResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchYouTube = async (
    searchQuery: string
  ): Promise<YouTubeResult[]> => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        searchQuery
      )}&maxResults=20&type=video&key=${
        process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
      }`
    );
    if (!response.ok) {
      console.error("YouTube API Error:", await response.text());
      throw new Error("Failed to fetch YouTube data");
    }
    const data = await response.json();
    return data.items.map((item: YouTubeItem) => ({
      id: item.id.videoId,
      type: "youtube",
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.default.url,
    }));
  };

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const youtubeData = await searchYouTube(query);
        setResults(youtubeData);
      } catch (error) {
        console.error("Search error issue:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchResults, 500);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search YouTube..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10"
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      </div>
      {!loading && results.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <ul className="space-y-4 max-h-96 overflow-y-auto">
              {results.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-12 w-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.channel}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      {loading && <div className="text-center py-4">Loading...</div>}
    </div>
  );
};

export default SearchResults;
