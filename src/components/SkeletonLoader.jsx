import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
        <div>
          <div className="h-6 bg-gray-200 rounded w-24 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-16 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-12"></div>
        </div>
      </div>

      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>

      <div className="space-y-2 mb-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="h-6 bg-gray-200 rounded w-20"></div>
      </div>

      <div className="h-12 bg-gray-200 rounded w-full"></div>
    </div>
  );
}