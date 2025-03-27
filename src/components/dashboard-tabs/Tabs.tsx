"use client";
import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Button } from "../ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineDown } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Tab =
  | "overview"
  | "projections"
  | "engagement"
  | "media"
  | "influencer"
  | "social";

 type SocialMedia = "instagram" | "twitter" | "linkedin" | "youtube";

interface TabsProps {
  onTabSelect: (tab: Tab) => void;
  onSocialMediaSelect: (media: SocialMedia) => void; // New Prop
}

const Tabs: React.FC<TabsProps> = ({ onTabSelect ,onSocialMediaSelect}) => {
  const [selectedTab, setSelectedTab] = useState<Tab>("overview");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedSocialMedia, setSelectedSocialMedia] =
    useState<SocialMedia>("instagram");

  
  const handleSocialMediaClick = (media: SocialMedia) => {
    setSelectedSocialMedia(media);
    onSocialMediaSelect(media); // Pass data to Parent
  };

  const handleTabClick = (tab: Tab) => {
    setSelectedTab(tab);
    onTabSelect(tab);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const socialButtonClass = (media: SocialMedia) =>
    `flex items-center gap-2 rounded-[15px] px-4 py-2 ${
      selectedSocialMedia === media
        ? "bg-[#FF4500] text-white"
        : "bg-gray-200 text-black"
    } hover:bg-white hover:text-black`;
  return (
    <div
      className="md:flex md:items-center md:flex-wrap md:justify-between p-4 mt-12 rounded-lg bg-white md:mx-20 dark:bg-[#2E2B2B] space-y-4 md:space-y-0 md:space-x-4"
      style={{ zIndex: 1000000 }}
    >
      {/* Show Social Media Icons only on Mobile */}
      <div className="flex space-x-8 flex-wrap md:hidden">
        <Button
          className={socialButtonClass("instagram")}
          onClick={() => handleSocialMediaClick("instagram")}
        >
          <FaInstagram />
        </Button>
        <Button
          className={socialButtonClass("twitter")}
          onClick={() => handleSocialMediaClick("twitter")}
        >
          <FaXTwitter className="text-black" />
        </Button>
        <Button
          className={socialButtonClass("linkedin")}
          onClick={() => handleSocialMediaClick("linkedin")}
        >
          <FaLinkedin className="text-black" />
        </Button>
        <Button
          className={socialButtonClass("youtube")}
          onClick={() => handleSocialMediaClick("youtube")}
        >
          <FaYoutube className="text-black" />
        </Button>
      </div>

      {/* Hide Social Media Icons on Desktop */}
      <div className="hidden md:flex md:flex-wrap gap-2">
        <Button
          className={socialButtonClass("instagram")}
          onClick={() => handleSocialMediaClick("instagram")}
        >
          <FaInstagram className="mr-2" /> Instagram
        </Button>
        <Button
          className={socialButtonClass("twitter")}
          onClick={() => handleSocialMediaClick("twitter")}
        >
          <FaXTwitter className="text-black mr-2" /> Twitter
        </Button>
        <Button
          className={socialButtonClass("linkedin")}
          onClick={() => handleSocialMediaClick("linkedin")}
        >
          <FaLinkedin className="text-black mr-2" /> LinkedIn
        </Button>
        <Button
          className={socialButtonClass("youtube")}
          onClick={() => handleSocialMediaClick("youtube")}
        >
          <FaYoutube className="text-black mr-2" /> YouTube
        </Button>
      </div>

      {/* Tab Buttons (Hidden on Mobile) */}
      <div className="hidden md:flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
        <Button
          variant="custom"
          className={`font-bold ${
            selectedTab === "overview" ? "text-orange-600" : ""
          }`}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </Button>
        <Button
          variant="custom"
          className={`font-bold ${
            selectedTab === "projections" ? "text-orange-600" : ""
          }`}
          onClick={() => handleTabClick("projections")}
        >
          Future Projections
        </Button>
        <Button
          variant="custom"
          className={`font-bold ${
            selectedTab === "engagement" ? "text-orange-600" : ""
          }`}
          onClick={() => handleTabClick("engagement")}
        >
          Engagement Stats
        </Button>
        <Button
          variant="custom"
          className={`font-bold ${
            selectedTab === "media" ? "text-orange-600" : ""
          }`}
          onClick={() => handleTabClick("media")}
        >
          Media Stats
        </Button>

        {/* More Button with Dropdown */}
        <div className="relative">
          <Button
            variant="default"
            className="flex items-center gap-2 rounded-full bg-black font-bold dark:bg-black dark:text-white"
            onClick={toggleDropdown}
          >
            More <AiOutlineDown />
          </Button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleTabClick("influencer")}
              >
                Influencer Stats
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleTabClick("social")}
              >
                Social Stats
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Swiper spaceBetween={12} slidesPerView={2}>
          <SwiperSlide>
            <Button
              variant="custom"
              className={`font-bold ${
                selectedTab === "overview" ? "text-orange-600" : ""
              }`}
              onClick={() => handleTabClick("overview")}
            >
              Overview
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button
              variant="custom"
              className={`font-bold ${
                selectedTab === "projections" ? "text-orange-600" : ""
              }`}
              onClick={() => handleTabClick("projections")}
            >
              Future Projections
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button
              variant="custom"
              className={`font-bold ${
                selectedTab === "engagement" ? "text-orange-600" : ""
              }`}
              onClick={() => handleTabClick("engagement")}
            >
              Engagement Stats
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button
              variant="custom"
              className={`font-bold ${
                selectedTab === "media" ? "text-orange-600" : ""
              }`}
              onClick={() => handleTabClick("media")}
            >
              Media Stats
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button
              variant="custom"
              className={`font-bold ${
                selectedTab === "influencer" ? "text-orange-600" : ""
              }`}
              onClick={() => handleTabClick("influencer")}
            >
              Influencer Stats
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <Button
              variant="custom"
              className={`font-bold ${
                selectedTab === "social" ? "text-orange-600" : ""
              }`}
              onClick={() => handleTabClick("social")}
            >
              Social Stats
            </Button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Tabs;
