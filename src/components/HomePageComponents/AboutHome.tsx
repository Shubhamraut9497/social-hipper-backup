import Image from "next/image";
import React from "react";

const AboutHome = () => {
  return (
    <div className="px-8 py-16 md:mx-20">
      <section className="flex justify-end items-center my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {/* Left Column */}
          <div className="relative flex justify-end">
            <div
              className="w-[600] h-[600px] bg-cover bg-center rounded-xl border-8 border-white"
              style={{
                backgroundImage: "linear-gradient(to bottom, #FFE6E4, #FFF5F2)", // Updated gradient colors
              }}
            ></div>
            <div className="absolute bottom-20 right-60">
            <Image
              src="/images/home-data.png"
              alt="img"
              width={200}
              height={200}
            />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-[50px] font-medium">
              <span className="font-bold ">Enterprise </span>
              <br />
              Resource Planning
            </h2>
            <p className="text-lg">
              Simple and intuitive time tracking.
              <br /> Run the tracker or enter your times manually.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                {/* Colored Circle before list item */}
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                <span>Feature 1</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                <span>Feature 2</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                <span>Feature 3</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHome;
