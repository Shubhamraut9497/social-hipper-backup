// components/ProfileCard.tsx

import { BiMessageAltMinus } from "react-icons/bi";
import { Button } from "../ui/button";
import { RiGroupLine } from "react-icons/ri";

type UserProfile = {
  id: number;
  name: string;
  location: string;
  profileImage: string;
  isVerified: boolean;
  stats: {
    label: string;
    value: string;
    change: string;
    icon: JSX.Element;
  }[];
};

const mockData: UserProfile[] = [
  {
    id: 1,
    name: "Rajat Jain",
    location: "Hyderabad, India",
    profileImage: "/images/profile.jpeg",
    isVerified: true,
    stats: [
      {
        label: "Followers",
        value: "561",
        change: "+1 (0.2%)",
        icon: <RiGroupLine className="mr-3" size={24} />,
      },
      {
        label: "Posts",
        value: "153",
        change: "+1 (0.2%)",
        icon: <BiMessageAltMinus className="mr-3" size={24} />,
      },
      {
        label: "Engagement",
        value: "14.71%",
        change: "+1 (0.2%)",
        icon: <RiGroupLine className="mr-3" size={24} />,
      },
    ],
  },
  {
    id: 2,
    name: "Alex Morgan",
    location: "New York, USA",
    profileImage: "/images/profile.jpeg",
    isVerified: true,
    stats: [
      {
        label: "Followers",
        value: "1.2k",
        change: "+10 (0.8%)",
        icon: <RiGroupLine className="mr-3" size={24} />,
      },
      {
        label: "Posts",
        value: "340",
        change: "+5 (1.5%)",
        icon: <BiMessageAltMinus className="mr-3" size={24} />,
      },
      {
        label: "Engagement",
        value: "12.3%",
        change: "+0.5 (4%)",
        icon: <RiGroupLine className="mr-3" size={24} />,
      },
    ],
  },
  // More user profiles can be added here
];

export default function ProfileCard() {
  return (
    <div className="space-y-8 mt-8">
      {mockData.map((user) => (
        <div
          key={user.id}
          className="grid grid-cols-12 gap-6 md:gap-20 items-center p-6 bg-white dark:bg-[#1A1919] rounded-[15px] shadow-md"
        >
          {/* Profile Picture and Basic Info */}
          <div className="col-span-12 sm:col-span-2 flex flex-col items-center mb-4 sm:mb-0">
            <div className="relative">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-16 h-16 rounded-full"
              />
              {user.isVerified && (
                <span className="absolute top-1 right-1 bg-blue-500 text-white rounded-full px-1 text-xs">
                  ✓
                </span>
              )}
            </div>
            <div className="mt-3 text-center">
              <p className="font-semibold text-lg">{user.name}</p>
              <p className="text-sm text-gray-500">{user.location}</p>
            </div>
          </div>

          {/* Statistics Section - Middle, occupies 12 columns on mobile, 7 on larger screens */}
          <div className="col-span-12 sm:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {user.stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col p-4 dark:bg-[#1A1919] shadow-md text-left rounded-xl"
              >
                <div className="flex items-center justify-start gap-2">
                  <p className="text-[32px] font-bold">
                    {stat.value}{" "}
                    <span className="text-[16px] text-green-500">
                      {stat.change}
                    </span>
                  </p>
                </div>
                <p className="text-md text-[#4F4F4F] mt-4 dark:text-white font-bold flex items-center">
                  {stat.icon} {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons - Right, occupies 12 columns on mobile, 3 on larger screens */}
          <div className="col-span-12 sm:col-span-2 flex flex-col space-y-4">
            <Button variant="orange" className="rounded-[15px]">
              Get Report
            </Button>
            <Button variant="outline" className="w-full rounded-[15px]">
              View Contacts
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
