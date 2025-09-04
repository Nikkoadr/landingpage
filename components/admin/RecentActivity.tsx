"use client";
import React from "react";
import { Clock, User, DollarSign, Settings } from "lucide-react";

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: "user",
      message: "New user registration: Sarah Johnson",
      time: "2 minutes ago",
      icon: User,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      type: "payment",
      message: "Payment received: $2,450 from Enterprise Inc.",
      time: "15 minutes ago",
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      id: 3,
      type: "system",
      message: "System backup completed successfully",
      time: "1 hour ago",
      icon: Settings,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      id: 4,
      type: "user",
      message: "User profile updated: Michael Chen",
      time: "2 hours ago",
      icon: User,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      id: 5,
      type: "payment",
      message: "Payment failed: $890 from Tech Solutions",
      time: "3 hours ago",
      icon: DollarSign,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">
          Recent Activity
        </h3>
        <Clock className="w-5 h-5 text-slate-400" />
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 cursor-pointer group"
            >
              <div
                className={`w-10 h-10 ${activity.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon className={`w-5 h-5 ${activity.color}`} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 group-hover:text-blue-700 transition-colors duration-200">
                  {activity.message}
                </p>
                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 py-2 rounded-lg transition-all duration-200">
        View All Activities
      </button>
    </div>
  );
};

export default RecentActivity;
