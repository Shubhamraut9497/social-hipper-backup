"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import Image from "next/image";
import { FaEye, FaStar, FaUserFriends } from "react-icons/fa";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 2,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 3,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 4,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 5,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 6,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 7,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 8,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 9,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 10,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },

    // Add more testimonials as needed
  ];

  return (
    <div className="py-24">
      <h2 className="text-[50px] font-medium text-center mb-12">
        Over{" "}
        <span className="text-black font-bold dark:text-white">173.3M</span>{" "}
        influencers in the database
      </h2>

      {/* Top Carousel - Left to Right */}
      <div className="relative overflow-hidden">
        <Swiper
          modules={[Autoplay]} // Add Autoplay module here
          spaceBetween={32}
          slidesPerView="auto"
          loop={true}
          speed={15000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: false, // For left-to-right scroll
          }}
          className="continuous-scroll-left"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="flex-shrink-0 max-w-sm"
            >
              <div className="rounded-xl shadow-md flex flex-col items-center ">
                <div className="flex w-full items-center space-x-5 bg-[#FFDCDC] p-3 rounded-tl-xl rounded-tr-xl">
                  <Image
                    src={testimonial.platformIcon}
                    alt={testimonial.platform}
                    width={46}
                    height={46}
                    className="rounded-full"
                  />
                  <div className="rounded-xl">
                    <div className="font-bold text-black text-[24px]">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500">{testimonial.username}</div>
                  </div>
                </div>
                <div className="py-10 text-left bg-white w-full flex items-center justify-between px-4 rounded-b-xl">
                  <div className="flex flex-col items-center">
                    {" "}
                    <p className="text-sm font-semibold flex items-center gap-3 text-black">
                      <FaUserFriends className="text-black" />
                      {testimonial.subscribers}
                    </p>
                    <p className="dark:text-black">Subscribers</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold text-black flex items-center gap-3">
                      <FaStar className="text-black" />
                      {testimonial.shScore}
                    </p>
                    <p className="dark:text-black">SH Score</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold text-black flex items-center gap-3">
                      <FaEye className="text-black" />
                      {testimonial.avgViews}
                    </p>
                    <p className="dark:text-black">Avg Views</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Carousel - Right to Left */}
      <div className="relative overflow-hidden mt-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView="auto"
          loop={true}
          speed={15000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true, // For right-to-left scroll
          }}
          className="continuous-scroll-right"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="flex-shrink-0 max-w-sm"
            >
              <div className="rounded-xl shadow-md flex flex-col items-center ">
                <div className="flex w-full items-center space-x-5 bg-[#FFDCDC] p-3 rounded-tl-xl rounded-tr-xl">
                  <Image
                    src={testimonial.platformIcon}
                    alt={testimonial.platform}
                    width={46}
                    height={46}
                    className="rounded-full"
                  />
                  <div className="">
                    <div className="font-bold text-black text-[24px]">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500">{testimonial.username}</div>
                  </div>
                </div>
                <div className="py-10 text-left bg-white w-full flex items-center justify-between px-4 rounded-b-xl">
                  <div className="flex flex-col items-center">
                    {" "}
                    <p className="text-sm font-semibold flex items-center gap-3 text-black">
                      <FaUserFriends className="text-black" />
                      {testimonial.subscribers}
                    </p>
                    <p className="dark:text-black">Subscribers</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold text-black flex items-center gap-3">
                      <FaStar className="text-black" />
                      {testimonial.shScore}
                    </p>
                    <p className="dark:text-black">SH Score</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold text-black flex items-center gap-3">
                      <FaEye className="text-black" />
                      {testimonial.avgViews}
                    </p>
                    <p className="dark:text-black">Avg Views</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
