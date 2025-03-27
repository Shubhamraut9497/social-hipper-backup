import React, { useState, useEffect } from "react";
import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const InstagramSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchInstagramUsers = async (searchQuery) => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const searchParams = new URLSearchParams({
        q: searchQuery,
        fields: "id,username,full_name,profile_picture_url",
        access_token: process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN,
      });

      const url = `https://graph.instagram.com/v12.0/users/search?${searchParams}`;
      const response = await fetch(url);

      // Check for non-JSON responses
      const contentType = response.headers.get("content-type");
      if (!response.ok) {
        const errorMessage = contentType.includes("application/json")
          ? (await response.json()).error.message
          : await response.text();
        throw new Error(errorMessage);
      }

      return await response.json();
    } catch (error) {
      console.error("Search error:", error);
      setError(error.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      const data = await searchInstagramUsers(query);
      if (data) {
        setResults(data);
        setError(null);
      }
    };

    const debounceTimer = setTimeout(fetchData, 500);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search Instagram users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10"
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      </div>
      <Card>
        <CardContent className="p-4">
          {loading && <div className="text-center py-4">Loading...</div>}

          {error && (
            <div className="text-red-500 text-center py-4">{error}</div>
          )}

          <ul className="space-y-4">
            {results.map((user) => (
              <li key={user.id} className="flex items-center gap-4">
                {user.profile_picture_url ? (
                  <img
                    src={user.profile_picture_url}
                    alt={user.username}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 p-3 bg-gray-100 rounded-full" />
                )}
                <div>
                  <p className="font-medium">@{user.username}</p>
                  <p className="text-sm text-gray-500">{user.full_name}</p>
                </div>
              </li>
            ))}
            {results.length === 0 && !loading && query.length >= 2 && (
              <li className="text-center text-gray-500 py-4">No users found</li>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstagramSearch;
