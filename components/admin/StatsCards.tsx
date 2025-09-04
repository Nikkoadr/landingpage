"use client";
import React from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  ShoppingBag,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const StatsCards: React.FC = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$54,239",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      bgGradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+8.3%",
      changeType: "positive",
      icon: Users,
      bgGradient: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "-2.1%",
      changeType: "negative",
      icon: ShoppingBag,
      bgGradient: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Growth Rate",
      value: "23.8%",
      change: "+4.2%",
      changeType: "positive",
      icon: TrendingUp,
      bgGradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.changeType === "positive" ? ArrowUp : ArrowDown;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.bgGradient} rounded-xl flex items-center justify-center shadow-lg`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                  stat.changeType === "positive"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                <TrendIcon className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                {stat.value}
              </h3>
              <p className="text-slate-500 text-sm">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
