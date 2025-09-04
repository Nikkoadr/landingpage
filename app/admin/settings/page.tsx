"use client";
import React, { useState } from "react";
import { Save, Bell, Shield, Palette, Globe, Database } from "lucide-react";

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const settingSections = [
    {
      title: "General Settings",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
      settings: [
        { label: "Site Name", type: "text", value: "AdminPro Dashboard" },
        {
          label: "Site URL",
          type: "text",
          value: "https://adminpro.example.com",
        },
        { label: "Contact Email", type: "email", value: "admin@example.com" },
      ],
    },
    {
      title: "Security Settings",
      icon: Shield,
      color: "from-red-500 to-red-600",
      settings: [
        { label: "Two-Factor Authentication", type: "toggle", value: true },
        { label: "Login Attempts Limit", type: "number", value: "5" },
        { label: "Session Timeout (hours)", type: "number", value: "24" },
      ],
    },
    {
      title: "Database Settings",
      icon: Database,
      color: "from-green-500 to-green-600",
      settings: [
        { label: "Auto Backup", type: "toggle", value: true },
        { label: "Backup Frequency (hours)", type: "number", value: "12" },
        { label: "Data Retention (days)", type: "number", value: "90" },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Settings</h1>
        <p className="text-slate-600">
          Customize your admin panel preferences and system configuration.
        </p>
      </div>

      {/* Quick Settings */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
        <div className="flex items-center space-x-3 mb-6">
          <Bell className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-slate-800">
            Quick Settings
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200">
            <span className="font-medium text-slate-700">
              Push Notifications
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-cyan-50 rounded-xl border border-cyan-200">
            <span className="font-medium text-slate-700">Email Alerts</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200">
            <span className="font-medium text-slate-700">Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Detailed Settings */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {settingSections.map((section, index) => {
          const Icon = section.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-4">
                {section.settings.map((setting, settingIndex) => (
                  <div key={settingIndex}>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {setting.label}
                    </label>
                    {setting.type === "toggle" ? (
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={setting.value as boolean}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    ) : (
                      <input
                        type={setting.type}
                        defaultValue={setting.value as string}
                        className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    )}
                  </div>
                ))}
              </div>

              <button
                className={`
                w-full mt-6 flex items-center justify-center space-x-2 
                bg-gradient-to-r ${section.color} hover:opacity-90
                text-white px-4 py-3 rounded-xl font-medium 
                shadow-lg hover:shadow-xl transform hover:scale-105 
                transition-all duration-200
              `}
              >
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
