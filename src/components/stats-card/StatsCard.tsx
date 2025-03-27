import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  AiOutlineLineChart,
  AiOutlineUsergroupAdd,
  AiOutlineHeart,
  AiOutlineRise,
  AiOutlineFileText,
  AiOutlineMessage,
} from "react-icons/ai";

const statsData = [
  {
    title: "Engagement rate",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineLineChart,
  },
  {
    title: "Followers Growth",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineUsergroupAdd,
  },
  {
    title: "Average Likes",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineHeart,
  },
  {
    title: "Projected Followers",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineRise,
  },
  {
    title: "Avg Post",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineFileText,
  },
  {
    title: "Comment ratio",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineMessage,
  },
  {
    title: "Average Likes",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineHeart,
  },
  {
    title: "Projected Followers",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineRise,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-2 md:mx-20 mt-8">
      {statsData.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card
            key={index}
            className="border border-gray-200 shadow-sm rounded-[15px] p-2"
          >
            <CardHeader className="flex items-start justify-between">
              <div className="flex flex-col items-start space-x-2">
                <CardTitle className="text-[32px] font-bold">
                  {stat.value}
                </CardTitle>
                <div className="flex items-center justify-start gap-2 mt-2 " style={{marginLeft:"0px"}}>
                  <IconComponent className="text-[#4F4F4F] dark:text-white text-xl" />
                  <p className="text-[18px] leading-[24px] font-semibold text-[#4F4F4F] dark:text-white">
                    {stat.title}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="">
                <div className="ml-2 text-[#22902F] text-[16px] leading-[19px] text-center mb-2 font-bold">
                  {stat.growth}
                </div>
                <div className="w-full bg-gray-200 h-4 rounded-full">
                  <div
                    className="bg-[#BBBABA] h-4 rounded-full"
                    style={{ width: "50%" }}
                  ></div>{" "}
                  {/* Growth bar */}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
