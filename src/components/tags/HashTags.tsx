"use client";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { PiChatCircleText } from "react-icons/pi";


const topContentData = [
  {
    id: 1,
    image: "/images/two.jpeg",
    text: "Goa is the Answer, Who cares what the question is #goa #goadiaries #rb",
    likes: 137,
    comments: 137,
    date: "311 DAYS AGO",
  },
  {
    id: 2,
    image: "/images/one.jpeg",
    text: "Goa is the Answer, Who cares what the question is #goa #goadiaries #rb",
    likes: 137,
    comments: 137,
    date: "25 Weeks",
  },
  {
    id: 3,
    image: "/images/two.jpeg",
    text: "Goa is the Answer, Who cares what the question is #goa #goadiaries #rb",
    likes: 137,
    comments: 137,
    date: "25 Weeks",
  },
];

const hashtags = [
  { hashtag: "#goa", likes: 140, comments: 2 },
  { hashtag: "#goadiaries", likes: 140, comments: 2 },
  { hashtag: "#rb", likes: 137, comments: 8 },
  { hashtag: "#allineedisyou", likes: 105, comments: 0 },
  { hashtag: "#dubai", likes: 60, comments: 1 },
];

const mentions = [
  { mention: "#goa", likes: 140, comments: 2 },
  { mention: "#goadiaries", likes: 140, comments: 2 },
  { mention: "#rb", likes: 137, comments: 8 },
  { mention: "#allineedisyou", likes: 105, comments: 0 },
  { mention: "#dubai", likes: 60, comments: 1 },
];

const HashTags = () => {
  return (
    <div className="grid gap-8 p-4 md:mx-20 md:grid-cols-4">
      {/* Top Content Section */}
      <div className="col-span-4 md:col-span-2 p-4 bg-white dark:bg-[#2E2B2B] rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Your Top Content</h2>
        <div className="space-y-4">
          {topContentData.map((content) => (
            <div
              key={content.id}
              className="flex items-start border border-dashed border-gray-300 p-4 rounded-lg"
            >
              <img
                src={content.image}
                alt="User content"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="grid grid-cols-2 w-full gap-4 items-center">
                <div>
                  <p className="text-sm text-gray-800 mb-2 dark:text-white">{content.text}</p>
                  <div className="text-xs text-gray-500 dark:text-white">{content.date}</div>
                </div>
                <div className="flex items-center justify-end space-x-6">
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-white">
                    <AiOutlineLike />
                    <span className="font-semibold text-sm">
                      {content.likes}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-white">
                    <PiChatCircleText />
                    <span className="font-semibold text-sm">
                      {content.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Performing #hashtags Section */}
      <div className="p-4 bg-white dark:bg-[#2E2B2B] rounded-lg shadow col-span-4 md:col-span-1">
        <h2 className="text-lg font-semibold mb-4">Best Performing #hashtags</h2>
        <div className="space-y-2">
          {hashtags.map((tag, index) => (
            <div key={index} className="text-sm text-gray-800">
              <span className="font-semibold text-red-500">{tag.hashtag}</span>
              <div className="text-xs text-gray-600 dark:text-white mt-1">
                +{tag.likes} likes <br />+{tag.comments} comments
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Performing @mentions Section */}
      <div className="p-4 bg-white dark:bg-[#2E2B2B] rounded-lg shadow col-span-4 md:col-span-1">
        <h2 className="text-lg font-semibold mb-4">Best Performing @mention</h2>
        <div className="space-y-2">
          {mentions.map((mention, index) => (
            <div key={index} className="text-sm text-gray-800 ">
              <span className="font-semibold text-red-500">{mention.mention}</span>
              <div className="text-xs text-gray-600 dark:text-white mt-1">
                +{mention.likes} likes <br />+{mention.comments} comments
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HashTags;
