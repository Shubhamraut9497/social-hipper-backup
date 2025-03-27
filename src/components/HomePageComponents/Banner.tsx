"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchResults from "../SearchResult/SearchResult";
import { Search } from "lucide-react";

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

const Banner = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<YouTubeResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch YouTube data
  const searchYouTube = async (searchQuery: string) => {
    if (searchQuery.length < 2) return;
    setLoading(true);
    try {
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
      setResults(
        data.items.map((item: YouTubeItem) => ({
          id: item.id.videoId,
          type: "youtube",
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.default.url,
        }))
      );
    } catch (error) {
      console.error("Search error issue:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounced effect for search
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query.length >= 2) {
        searchYouTube(query);
      } else {
        setResults([]);
      }
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div
      className="relative z-0 pt-36 flex flex-col items-center justify-center dark:bg-gray-900 bg-gray-100 h-[600] sm:h-[998px]"
      style={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex flex-col items-center w-full max-w-4xl px-4 sm:px-0">
        <h1 className="text-2xl sm:text-[60px] font-bold text-center text-gray-900 dark:text-gray-700 mb-4 sm:mb-6 leading-tight sm:leading-[90px] mt-4 sm:mt-20">
          Powerful In-Depth
          <br /> Analytics for Instagram
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-700 mb-6 sm:mb-8 max-w-md">
          Sociallyser offers powerful in-depth analytics and actionable insights
          for brands, influencers, and agencies.
        </p>

        {/* Search Input with Button */}
        <div className="relative w-full max-w-md mb-8 sm:mb-12">
          <input
            type="text"
            placeholder="Search any account"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 sm:p-4 pr-24 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
          />
          {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" /> */}
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 sm:px-8 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:ring-2 focus:ring-red-500">
            Find
          </button>
        </div>

        {/* Search Results Component */}

        {/* Foreground Analytics Image */}
        <div className="relative w-full mt-12 md:mb-12">
          <div className="flex justify-center">
            <Image
              src="/images/top-image.png"
              alt="Analytics Overview"
              width={1200}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
