"use client";
import React from "react";
import { Plus, UserPlus, Settings, Download, BarChart } from "lucide-react";

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: "Add New User",
      description: "Create a new user account",
      icon: UserPlus,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      title: "Generate Report",
      description: "Create performance report",
      icon: BarChart,
      color: "from-cyan-500 to-cyan-600",
      hoverColor: "hover:from-cyan-600 hover:to-cyan-700",
    },
    {
      title: "System Settings",
      description: "Configure system options",
      icon: Settings,
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:from-indigo-600 hover:to-indigo-700",
    },
    {
      title: "Export Data",
      description: "Download CSV/Excel files",
      icon: Download,
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">
        Quick Actions
      </h3>

      <div className="space-y-4">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <button
              key={index}
              className={`
                w-full flex items-center space-x-4 p-4 rounded-xl 
                bg-gradient-to-r ${action.color} ${action.hoverColor}
                text-white shadow-md hover:shadow-lg 
                transform hover:scale-105 transition-all duration-200
                group
              `}
            >
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-200">
                <Icon className="w-6 h-6" />
              </div>

              <div className="text-left">
                <h4 className="font-semibold">{action.title}</h4>
                <p className="text-sm text-white text-opacity-90">
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Additional Info Card */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
        <div className="flex items-center space-x-3">
          <Plus className="w-5 h-5 text-blue-600" />
          <div>
            <h4 className="font-semibold text-slate-800">Need Help?</h4>
            <p className="text-sm text-slate-600">
              Check our documentation or contact support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
