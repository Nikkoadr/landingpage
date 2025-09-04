"use client";

import { useState } from "react";
import UserTable from "@/components/admin/UserTable";
import UserFilters from "@/components/admin/UserFilters";
import { Plus } from "lucide-react";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            User Management
          </h1>
          <p className="text-slate-600">
            Manage and monitor user accounts and permissions.
          </p>
        </div>

        <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          <Plus className="w-5 h-5" />
          <span>Add New User</span>
        </button>
      </div>

      {/* Filters */}
      <UserFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
      />

      {/* User Table */}
      <UserTable
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        roleFilter={roleFilter}
      />
    </div>
  );
}
