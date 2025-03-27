
import ParentComponent from "@/components/dashboard-tabs/TabsFinalData";
import Summary from "@/components/Faqs/Summary";
import ImportantUpdate from "@/components/ImportantUpdate/ImportantUpdate";
import StatsCards from "@/components/stats-card/StatsCard";
import HashTags from "@/components/tags/HashTags";
import React from "react";

const page = () => {
  return (
    <div>
      <ImportantUpdate />
      <ParentComponent/>
      <StatsCards />
      <HashTags />
      <Summary/>
    </div>
  );
};

export default page;
