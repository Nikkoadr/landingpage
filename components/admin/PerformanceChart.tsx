"use client";
import React from 'react';
import { TrendingUp } from 'lucide-react';

const PerformanceChart: React.FC = () => {
  const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 78 },
    { month: 'Mar', value: 52 },
    { month: 'Apr', value: 84 },
    { month: 'May', value: 91 },
    { month: 'Jun', value: 76 },
    { month: 'Jul', value: 88 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">Performance Overview</h3>
          <p className="text-slate-500 text-sm">Monthly performance metrics</p>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-medium">+15.3% vs last month</span>
        </div>
      </div>
      
      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between space-x-2">
          {chartData.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-700 ease-out hover:from-blue-600 hover:to-blue-500 cursor-pointer shadow-lg"
                style={{ 
                  height: `${(item.value / maxValue) * 100}%`,
                  animationDelay: `${index * 100}ms`
                }}
              />
              <span className="text-xs text-slate-500 mt-2 font-medium">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;