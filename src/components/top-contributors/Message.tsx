import React from "react";

const Message = () => {
  return (
    <div className="bg-white md:mx-20 py-8 mt-5 dark:bg-[#2E2B2B] rounded-[15px] text-center">
      <div className="p-4">
        <h3 className="font-bold text-black text-[30px] md:text-[48px] leading-[38px] md:leding-[58px] dark:text-white uppercase max-w-[900px] mx-auto">
          Top <span className="text-[#FF4500]">100 Celebrity</span> Influencers
        </h3>
      </div>
      <div className="flex justify-center">
        <p className="text-[15px] leading-[28px] font-[400] text-black dark:text-gray-400 hover:text-gray-800 dark:hover:text-white max-w-[900px] mx-auto text-center">
          Discover the Top 100 Celebrity Influencers on Instagram, ranked by
          followers. Leading the list are Instagram, Cristiano Ronaldo, Leo
          Messi, Selena Gomez, Kylie, and many more. Explore the full list of
          the top 100 IG creators with the most followers.
        </p>
      </div>
    </div>
  );
};

export default Message;
