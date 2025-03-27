"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../ui/table";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

type Influencer = {
  rank: number;
  name: string;
  category: string[];
  followers: string;
  country: string;
  engagementRate: string;
  image: string;
};

type InfluencerTableProps = {
  filters: {
    country: string;
    city: string;
    category: string;
    influencerType: string;
  };
};

const InfluencerTable = ({ filters }: InfluencerTableProps) => {
  const influencers: Influencer[] = [
    {
      rank: 1,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg",
    },
    {
      rank: 2,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg",
    },
    {
      rank: 3,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg",
    },
    {
      rank: 4,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg",
    },
    {
      rank: 5,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg",
    },

    // Additional influencer data...
  ];

  const filteredInfluencers = influencers.filter((influencer) => {
    const matchesCountry = filters.country
      ? influencer.country === filters.country
      : true;
    const matchesCategory = filters.category
      ? influencer.category.includes(filters.category)
      : true;

    return matchesCountry && matchesCategory;
  });

  return (
    <Table className="w-full text-center rounded-lg shadow">
      <TableHeader className="bg-[#E2E2E2] dark:bg-[#333]">
        <TableRow>
          <TableHead className="font-bold text-[#4F4F4F] dark:text-gray-300 p-4 text-center">
            Rank
          </TableHead>
          <TableHead className="font-bold text-[#4F4F4F] dark:text-gray-300 p-4 text-center">
            Influencer Name
          </TableHead>
          <TableHead className="font-bold text-[#4F4F4F] dark:text-gray-300 p-4 text-center">
            Category
          </TableHead>
          <TableHead className="font-bold text-[#4F4F4F] dark:text-gray-300 p-4 text-center">
            Followers
          </TableHead>
          <TableHead className="font-bold text-[#4F4F4F] dark:text-gray-300 p-4 text-center">
            Country
          </TableHead>
          <TableHead className="font-bold text-[#4F4F4F] dark:text-gray-300 p-4 text-center">
            Engagement Rate
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredInfluencers.map((influencer, index) => (
          <TableRow
            key={index}
            className="border-b border-gray-200 dark:border-gray-700"
          >
            <TableCell className="font-bold text-[30px] leading-[36px] text-black dark:text-white p-4 text-center">
              {influencer.rank}
            </TableCell>
            <TableCell className="flex items-center justify-center gap-2 p-4 relative">
              <Image
                src="/images/profile.jpeg"
                width={50}
                height={50}
                alt="Profile"
                className="rounded-full"
              />
              <div className="absolute top-4 left-[24px] md:left-[132px]">
                <BsCheckCircleFill className="text-blue-500 w-4 h-4" />
              </div>
              <span className="text-[20px] text-black dark:text-white">
                {influencer.name}
              </span>
            </TableCell>
            <TableCell className="p-4 text-center">
              <div className="flex gap-2 justify-center flex-wrap">
                {influencer.category.map((cat, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full font-medium text-[20px] text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </TableCell>
            <TableCell className="font-semibold text-black dark:text-white p-4 text-center">
              {influencer.followers}
            </TableCell>
            <TableCell className="p-4 text-center text-black dark:text-white font-medium text-[20px]">
              {influencer.country}
            </TableCell>
            <TableCell className="p-4 text-center font-medium text-[20px] text-gray-800 dark:text-gray-300">
              {influencer.engagementRate}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InfluencerTable;
