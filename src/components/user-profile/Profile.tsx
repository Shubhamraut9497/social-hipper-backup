"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { HiOutlineLockOpen } from "react-icons/hi";
import { RiGroupLine } from "react-icons/ri";
import { BiMessageAltMinus, BiMessageSquare } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineDown, AiOutlineSwap } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdPerson } from "react-icons/md";
import { IoLinkOutline } from "react-icons/io5";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "../ui/dialog";

// Define platform types
type SocialMedia = "instagram" | "twitter" | "linkedin" | "youtube";

// Default data for each platform
const platformData = {
  instagram: {
    profileImage: "/images/profile.jpeg",
    name: "Rajat Jain",
    role: "Instagram Influencer | Travel Blogger",
    description: "Adventurer & Storyteller | 1M+ Followers",
    followers: 1500,
    posts: 210,
    engagement: 12.5,
    trackedSince: "Sept 20",
  },
  twitter: {
    profileImage: "/images/profile.jpeg",
    name: "Rajat Jain",
    role: "Tech Enthusiast | Thought Leader",
    description: "Tech updates, trends & thoughts.",
    followers: 1200,
    posts: 500,
    engagement: 8.9,
    trackedSince: "Sept 20",
  },
  linkedin: {
    profileImage: "/images/profile.jpeg",
    name: "Rajat Jain",
    role: "Digital Marketing Specialist",
    description: "Connect for industry insights & opportunities.",
    followers: 850,
    posts: 80,
    engagement: 15.3,
    trackedSince: "Sept 20",
  },
  youtube: {
    profileImage: "/images/profile.jpeg",
    name: "Rajat Jain",
    role: "Content Creator | Educator",
    description: "Tech tutorials, reviews & educational content.",
    followers: 2500,
    posts: 120,
    engagement: 20.1,
    trackedSince: "Sept 20",
  },
};

// Component Props
interface UserProfileProps {
  selectedPlatform: SocialMedia;
}

const UserProfile: React.FC<UserProfileProps> = ({ selectedPlatform }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // Fetch current platform data
  const data = platformData[selectedPlatform];

  return (
    <>
      <div className="dark:bg-[#2E2B2B] bg-white p-6 relative py-16 rounded-[25px] md:mx-20 mt-16 shadow-md flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Top Corner Buttons */}
        <div className="absolute top-[-36px] right-10 flex gap-2">
          <Button
            variant="ghost"
            className="bg-[#E1E1E1] dark:bg-black rounded-b-none"
          >
            <AiOutlineSwap />
            Compare
          </Button>

          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            customInput={
              <Button
                variant="ghost"
                className="bg-[#E1E1E1] dark:bg-black rounded-b-none"
              >
                <SlCalender />
                Last 30 Days <AiOutlineDown className="ml-1" />
              </Button>
            }
          />

          <Button variant="ghost" className="dark:bg-white rounded-b-none">
            <img src="/images/download.svg" alt="svg download" />
          </Button>
        </div>

        {/* Left Section */}
        <div className="flex flex-col justify-around gap-8 md:w-2/5">
          {/* Profile Image and Info */}
          <div className="flex items-center justify-start gap-12 relative">
            <Image
              src={data.profileImage}
              width={80}
              height={80}
              alt="Profile"
              className="rounded-full"
            />
            {/* Blue Check Mark */}
            <div className="absolute top-4 left-14">
              <BsCheckCircleFill className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <h2 className="text-[32px] font-bold">{data.name}</h2>
              <p className="text-sm text-black font-semibold mt-1 mb-2 dark:text-white">
                {data.role}
              </p>
              <p className="text-xs text-gray-500 dark:text-white">
                {data.description}
              </p>
              <p className="text-xs text-gray-400 mt-2 dark:text-gray-300">
                Tracked since {data.trackedSince}
              </p>
            </div>
          </div>

          {/* Additional Buttons */}
          <div className="flex gap-2 flex-wrap justify-between">
            <div className="flex gap-4 text-[#4F4F4F]">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="p-2 rounded-full border-[1px] border-[#4F4F4F] bg-transparent dark:bg-gray-200 cursor-pointer">
                    <MdPerson size={20} />
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>
                    <>User Details</>
                  </DialogTitle>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">Dialog Content</h2>
                    <p className="text-sm text-gray-600">
                      This is the content for the dialog box.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="p-2 rounded-full border-[1px] border-[#4F4F4F] bg-transparent dark:bg-gray-200">
                <IoLinkOutline size={20} />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant="customGray">Digital Marketing</Button>
              <Button variant="customGray">Technology</Button>
              <Button variant="customGray">Business</Button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-3/5 flex flex-col justify-between">
          {/* Stats Cards */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-black dark:text-white leading-[14.52px] font-[400] flex items-center gap-2">
              <img src="/images/square.svg" alt="svg square" />
              Tracked since Sep 23, 2024. Updated 7 hours ago.
            </p>
            <Button variant="orange">
              <HiOutlineLockOpen /> Claim
            </Button>
          </div>
          <div className="flex gap-4 mt-4 flex-wrap md:flex-nowrap">
            <Card
              title="Followers"
              count={data.followers}
              icon={<RiGroupLine />}
            />
            <Card title="Posts" count={data.posts} icon={<BiMessageAltMinus />} />
            <Card
              title="Engagement Rate"
              count={`${data.engagement}%`}
              icon={<BiMessageAltMinus />}
            />
          </div>
          <div className="flex justify-center items-center mt-4">
          <Button variant="ghost">
            <BiMessageSquare
              className="mr-2 w-8 h-8"
              style={{ width: "32px", height: "32px" }}
            />
            Compare Last 30 Days
          </Button>
        </div>

        {/* Engagement Bar */}
        <div className="mt-5 h-[15px] bg-gray-600 rounded-full overflow-hidden">
          <div className="bg-[#EE2020] h-full w-1/2"></div>
        </div>
        </div>
      </div>
    </>
  );
};

// Stats Card Component
const Card = ({
  title,
  count,
  icon,
}: {
  title: string;
  count: number | string;
  icon: React.ReactNode;
}) => (
  <div className="flex-1 p-4 dark:bg-[#1A1919] shadow-md text-left rounded-xl">
    <div className="flex items-center justify-start gap-2">
      <p className="text-[32px] font-bold">{count}</p>
    </div>
    <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center">
      {icon} {title}
    </p>
  </div>
);

export default UserProfile;
