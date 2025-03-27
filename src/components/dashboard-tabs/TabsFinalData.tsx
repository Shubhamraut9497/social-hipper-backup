"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import UserProfile from "../user-profile/Profile";
import StatsSection from "../dashboard-chart/Chart";


type SocialMedia = "instagram" | "twitter"  | "youtube" | "linkedin" ;
const ParentComponent = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [selectedSocialMedia, setSelectedSocialMedia] = useState<SocialMedia>("instagram");

  // Content render function based on selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case "overview":
        return <UserProfile selectedPlatform={selectedSocialMedia} />;
      case "projections":
        return <StatsSection />;
      case "engagement":
        return <div>Engagement Stats Content</div>;
      case "media":
        return <div>Media Stats Content</div>;
      case "influencer":
        return <div>Influencer Stats Content</div>;
      case "social":
        return <div>Social Stats Content</div>;
      default:
        return <div>Select a tab to see content</div>;
    }
  };

  return (
    <>
      {/* Sticky Tabs Wrapper */}
      <div className="sticky top-0 z-50 ">
        <Tabs onTabSelect={setSelectedTab} onSocialMediaSelect={setSelectedSocialMedia}/>
      </div>

      {/* Rendered Content */}
      <div className="p-4">{renderContent()}</div>
    </>
  );
};

export default ParentComponent;
