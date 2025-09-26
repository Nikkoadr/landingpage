"use client";
import React, { useEffect, useState } from "react";
import { Save, Globe } from "lucide-react";
import Swal from "sweetalert2";

interface SettingItem {
  label: string;
  type: "text" | "email";
  value: string;
  key: string;
}

interface SettingSection {
  title: string;
  icon: React.ElementType;
  color: string;
  settings: SettingItem[];
}

const Settings: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [settingSections, setSettingSections] = useState<SettingSection[]>([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("http://localhost:8081/api/v1/settings", {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch settings");
        const json = await res.json();
        const settings = json.data;

        setSettingSections([
          {
            title: "General Settings",
            icon: Globe,
            color: "from-blue-500 to-blue-600",
            settings: [
              {
                label: "Site Name",
                type: "text",
                value: settings.site_name,
                key: "site_name",
              },
              {
                label: "Site URL",
                type: "text",
                value: settings.site_url,
                key: "site_url",
              },
              {
                label: "Contact Email",
                type: "email",
                value: settings.contact_email,
                key: "contact_email",
              },
            ],
          },
        ]);
      } catch (err) {
        console.error("Error fetching settings:", err);
        Swal.fire("Error", "Gagal memuat settings!", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleChange = (
    sectionIndex: number,
    settingIndex: number,
    newValue: string
  ) => {
    const updated = [...settingSections];
    updated[sectionIndex].settings[settingIndex].value = newValue;
    setSettingSections(updated);
  };

  const handleSave = async (section: SettingSection) => {
    const payload: Record<string, any> = {};
    section.settings.forEach((s) => {
      payload[s.key] = s.value;
    });

    try {
      const res = await fetch("http://localhost:8081/api/v1/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save settings");

      Swal.fire({
        toast: true,
        position: "top-end", // pojok kanan atas
        icon: "success",
        title: "Pengaturan berhasil disimpan",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (err) {
      console.error("❌ Error saving settings:", err);
      Swal.fire("Error", "Gagal menyimpan settings!", "error");
    }
  };

  if (loading) {
    return <p className="text-slate-600">Loading settings...</p>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Settings</h1>
        <p className="text-slate-600">Update your site configuration below.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {settingSections.map((section, sectionIndex) => {
          const Icon = section.icon;
          return (
            <div
              key={sectionIndex}
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
                    <input
                      type={setting.type}
                      value={setting.value}
                      onChange={(e) =>
                        handleChange(sectionIndex, settingIndex, e.target.value)
                      }
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                ))}
              </div>

              <button
                className={`w-full mt-6 flex items-center justify-center space-x-2 bg-gradient-to-r ${section.color} hover:opacity-90 text-white px-4 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                onClick={() => handleSave(section)}
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
