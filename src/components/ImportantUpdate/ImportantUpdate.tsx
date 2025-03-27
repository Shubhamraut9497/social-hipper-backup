import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const ImportantUpdate = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-[#2E2B2B] p-4 md:mx-20 text-center rounded-lg mt-8  space-y-4 md:space-y-0">
      {/* Important Update Text */}
      <div className="flex items-center justify-center md:justify-between md:space-x-4">
        <Image src="/images/Vector.png" width={24} height={24} alt="vector" className="mr-2" />
        <p className="text-black dark:text-white text-sm md:text-[13px] text-center md:text-left">
          IMPORTANT UPDATE: Our LinkedIn integration has been enhanced for
          better performance. Refresh your connection today to keep your posts
          going out smoothly.
        </p>
      </div>

      {/* Button - Stacked on mobile */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <Button variant="orange" className="w-full md:w-auto">
          Visit Channels Page
        </Button>
      </div>
    </div>
  );
};

export default ImportantUpdate;
