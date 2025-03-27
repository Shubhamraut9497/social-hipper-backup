import React from "react";
import Faqs from "./Faqs";

const Summary = () => {
  return (
    <section className="md:mx-20 p-4">
      <div className="grid grid-cols-12 gap-8">
        {/* FAQs Section */}
        <div className="col-span-12 md:col-span-6 bg-white dark:bg-[#2E2B2B] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <Faqs />
        </div>

        {/* Written Summary Section */}
        <div className="col-span-12 md:col-span-6 bg-white dark:bg-[#2E2B2B] p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Written Summary</h1>
          <p className="text-gray-700">{/* Insert summary content here */}</p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
