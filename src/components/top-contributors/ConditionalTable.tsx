"use client";
import { useState } from "react";
import InfluencerTable from "./InfluencerTable";
import RowTable from "./RowTable";

const ConditionalTable = () => {
  const [filters, setFilters] = useState({
    country: "",
    city: "",
    category: "",
    influencerType: "",
  });

  const [showInfluencerTable, setShowInfluencerTable] = useState(false); // State to toggle between tables

  const handleFilterChange = (
    filterName: keyof typeof filters,
    value: string
  ) => {
    setFilters((prevState) => ({
      ...prevState,
      [filterName]: value,
    }));
  };

  return (
    <div className="bg-white dark:bg-[#2E2B2B] rounded-[15px] p-4 md:mx-20 my-8">
      {/* Filter Dropdowns */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {/* Country Select */}
        <div className="relative w-full sm:w-auto">
          <select
            value={filters.country}
            onChange={(e) => handleFilterChange("country", e.target.value)}
            className="px-4 py-2 w-full sm:w-auto bg-[#F3F1F1] dark:bg-[#4A4A4A] dark:text-white rounded-[15px] mb-4 sm:mb-0"
          >
            <option value="">Country</option>
            <option value="Portugal">Portugal</option>
            <option value="Brazil">Brazil</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
          </select>
        </div>

        {/* City Select */}
        <div className="relative w-full sm:w-auto">
          <select
            value={filters.city}
            onChange={(e) => handleFilterChange("city", e.target.value)}
            className="px-4 py-2 w-full sm:w-auto bg-[#F3F1F1] dark:bg-[#4A4A4A] dark:text-white rounded-[15px] mb-4 sm:mb-0"
          >
            <option value="">City</option>
            <option value="Lisbon">Lisbon</option>
            <option value="New York">New York</option>
            <option value="Paris">Paris</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </div>

        {/* Category Select */}
        <div className="relative w-full sm:w-auto">
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="px-4 py-2 w-full sm:w-auto bg-[#F3F1F1] dark:bg-[#4A4A4A] dark:text-white rounded-[15px] mb-4 sm:mb-0"
          >
            <option value="">Category</option>
            <option value="Sports">Sports</option>
            <option value="Music">Music</option>
            <option value="Fashion">Fashion</option>
            <option value="Tech">Tech</option>
          </select>
        </div>

        {/* Influencer Type Select */}
        <div className="relative w-full sm:w-auto">
          <select
            value={filters.influencerType}
            onChange={(e) =>
              handleFilterChange("influencerType", e.target.value)
            }
            className="px-4 py-2 w-full sm:w-auto bg-[#F3F1F1] dark:bg-[#4A4A4A] dark:text-white rounded-[15px] mb-4 sm:mb-0"
          >
            <option value="">Influencer Type</option>
            <option value="Celebrity">Celebrity</option>
            <option value="Micro-Influencer">Micro-Influencer</option>
            <option value="Brand Ambassador">Brand Ambassador</option>
            <option value="Content Creator">Content Creator</option>
          </select>
        </div>

        {/* Toggle and Filter Image Buttons */}
        <div className="ml-auto flex items-center gap-2">
          {/* Custom Toggle Button */}
          <div
            onClick={() => setShowInfluencerTable(!showInfluencerTable)}
            className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors
              ${showInfluencerTable ? "bg-[#FF4500]" : "bg-gray-300 dark:bg-gray-600"}`}
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 rounded-full transition-transform transform
                ${showInfluencerTable ? "translate-x-7 bg-white" : "bg-[#FF4500] dark:bg-white"}`}
            ></div>
          </div>

          <button onClick={() => alert("Filter action triggered")}>
            <img
              src="/images/filter-square.png"
              alt="filter"
              className="cursor-pointer dark:invert"
            />
          </button>
        </div>
      </div>

      {/* Conditionally Render InfluencerTable or RowTable */}
      {showInfluencerTable ? (
        <InfluencerTable filters={filters} />
      ) : (
        <RowTable />
      )}
    </div>
  );
};

export default ConditionalTable;
