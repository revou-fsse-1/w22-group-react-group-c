import React from "react";

export default function ListSkeleton() {
  return (
    <>
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="animate-pulse shadow-lg rounded-lg overflow-hidden"
        >
          <div className="bg-gray-200 h-[10rem] md:h-[15rem] w-64"></div>
          <div className="px-1 md:px-6 py-4 space-y-2">
            <div className="bg-gray-200 h-6 w-1/2"></div>
            <div className="bg-gray-200 h-4 w-3/4"></div>
            <div className="bg-gray-200 h-4 w-2/3"></div>
            <div className="bg-gray-200 h-4 w-1/2"></div>
            <div className="bg-gray-200 h-4 w-1/4"></div>
          </div>
        </div>
      ))}
    </>
  );
}
