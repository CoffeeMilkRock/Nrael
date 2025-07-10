import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gray-200 h-48 w-full animate-pulse"></div>
      <div className="p-5">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded w-full mb-3 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-1 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="flex items-center justify-between mb-4">
          <div className="h-5 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          <div className="h-8 bg-gray-300 rounded w-1/3 animate-pulse"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded-lg w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;