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
import { IoLinkOutline } from "react-icons/io5";
import { MdPerson } from "react-icons/md";

const UserProfile = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className="dark:bg-[#2E2B2B] bg-white p-6 relative py-16 rounded-[25px] md:mx-20 mt-16 shadow-md flex flex-col md:flex-row gap-6 md:gap-12">
      {/* Top Corner Buttons */}
      <div className="absolute top-[-36px] right-10 flex gap-2">
        <Button variant="ghost" className="bg-[#E1E1E1] dark:bg-black rounded-b-none">
          <AiOutlineSwap />
          Compare
        </Button>

        {/* Calendar Date Picker */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          customInput={
            <Button variant="ghost" className="bg-[#E1E1E1] dark:bg-black rounded-b-none">
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
            src="/images/profile.jpeg"
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
            <h2 className="text-[32px] font-bold flex items-center">
              Rajat Jain{" "}
              <span className="ml-2">
                <img src="/images/start.svg" alt="svg" />
              </span>
            </h2>
            <p className="text-sm text-black font-semibold mt-1 mb-2 dark:text-white">
              Digital Marketer | Content Creator
            </p>
            <p className="text-xs text-gray-500 dark:text-white">
              Founder @shortcoder | #DigitalMarketing Consultant, #SocialMedia
              Expert, #Influencer
            </p>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex gap-7 flex-wrap">
          <div className="flex gap-4 text-[#4F4F4F]">
            <div className="p-2 rounded-full border-[1px] border-[#4F4F4F] bg-transparent dark:bg-gray-200">
              <MdPerson size={20} />
            </div>
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
        {/* Tracking Info and Claim Button */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-black dark:text-white leading-[14.52px] font-[400] flex items-center gap-2">
            <img src="/images/square.svg" alt="svg square" />
            Tracked since Sep 23, 2024. Updated 7 hours ago.
          </p>
          <Button variant="orange">
            <HiOutlineLockOpen /> Claim
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4 mt-4 flex-wrap md:flex-nowrap">
          {/* Followers */}
          <div className="flex-1 p-4 dark:bg-[#1A1919] shadow-md text-left rounded-xl">
            <div className="flex items-center justify-start gap-2">
              <p className="text-[32px] font-bold">
                561{" "}
                <span className="text-[16px] text-green-500">+1 (0.2%)</span>
              </p>
            </div>
            <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center">
              <RiGroupLine className="!mr-3" size={24} /> Followers
            </p>
          </div>
          {/* Posts */}
          <div className="flex-1 p-4 dark:bg-[#1A1919] shadow-md text-left rounded-xl">
            <div className="flex items-center justify-start gap-2">
              <p className="text-[32px] font-bold">
                153{" "}
                <span className="text-[16px] text-green-500">+1 (0.2%)</span>
              </p>
            </div>
            <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center">
              <BiMessageAltMinus className="!mr-3" size={24} /> Posts
            </p>
          </div>
          {/* Engagement */}
          <div className="flex-1 p-4 dark:bg-[#1A1919] shadow-md rounded-xl text-left">
            <div className="flex items-center justify-start gap-2">
              <p className="text-[32px] font-bold">
                14.71%{" "}
                <span className="text-[16px] text-green-500">+1 (0.2%)</span>
              </p>
            </div>
            <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center">
              <RiGroupLine className="!mr-3" size={24} /> Engagement
            </p>
          </div>
        </div>

        {/* Compare Last 30 Days and Download Button */}
        <div className="flex justify-center items-center mt-4">
          <Button variant="ghost">
            <BiMessageSquare
              className="mr-2 w-8 h-8"
              style={{ width: "32px", height: "32px" }}
            />
          </Button>
        </div>

        {/* Engagement Bar */}
        <div className="mt-5 h-[15px] bg-gray-600 rounded-full overflow-hidden">
          <div className="bg-[#EE2020] h-full w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;