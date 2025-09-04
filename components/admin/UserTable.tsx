"use client";
import React from "react";
import { MoreVertical, Edit, Trash2, Eye } from "lucide-react";

interface UserTableProps {
  searchTerm: string;
  statusFilter: string;
  roleFilter: string;
}

const UserTable: React.FC<UserTableProps> = ({
  searchTerm,
  statusFilter,
  roleFilter,
}) => {
  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "Admin",
      status: "active",
      lastLogin: "2 minutes ago",
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      role: "User",
      status: "active",
      lastLogin: "1 hour ago",
      avatar: "MC",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Moderator",
      status: "inactive",
      lastLogin: "3 days ago",
      avatar: "ED",
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james.wilson@example.com",
      role: "User",
      status: "pending",
      lastLogin: "Never",
      avatar: "JW",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      email: "lisa.anderson@example.com",
      role: "Admin",
      status: "active",
      lastLogin: "30 minutes ago",
      avatar: "LA",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "inactive":
        return "bg-red-100 text-red-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-700";
      case "Moderator":
        return "bg-blue-100 text-blue-700";
      case "User":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-100">
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                User
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                Role
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                Status
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                Last Login
              </th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-blue-50 hover:bg-blue-50 transition-colors duration-200 group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold text-sm group-hover:scale-110 transition-transform duration-200">
                      {user.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{user.name}</p>
                      <p className="text-sm text-slate-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-100 rounded-lg transition-all duration-200">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-100 rounded-lg transition-all duration-200">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all duration-200">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
