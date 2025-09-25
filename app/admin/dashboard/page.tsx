"use client";

import { useEffect, useState } from "react";
import StatsCards from "@/components/admin/StatsCards";
import RecentActivity from "@/components/admin/RecentActivity";
import PerformanceChart from "@/components/admin/PerformanceChart";
import QuickActions from "@/components/admin/QuickActions";

interface User {
  id: number;
  name: string;
  email: string;
  role_id: number;
  role_name: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/v1/auth/me", {
          method: "GET",
          credentials: "include", // penting untuk kirim cookie JWT
        });
        if (!res.ok) {
          window.location.href = "/auth/login";
          return;
        }
        const result = await res.json();
        setUser(result.data);
      } catch (err) {
        console.error("Fetch me failed:", err);
        window.location.href = "/auth/login";
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  // Kalau admin, tampilkan dashboard lengkap
  if (user.role_name === "admin") {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Dashboard</h1>
          <p className="text-slate-600">
            Welcome back {user.name}! Here's what's happening with your
            platform.
          </p>
        </div>

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PerformanceChart />
            <RecentActivity />
          </div>
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>
      </div>
    );
  }

  // Kalau user biasa, hanya tampilan selamat datang
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">
        Selamat datang, {user.name} 👋
      </h1>
      <p className="text-slate-600">
        Anda berhasil login sebagai <strong>{user.role_name}</strong>.
      </p>
    </div>
  );
}
