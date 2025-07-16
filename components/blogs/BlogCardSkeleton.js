import React from "react";

export default function BlogCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 animate-pulse h-full">
      <div className="h-60 bg-gray-300 rounded-3xl w-full" />
      <div className="h-4 w-3/4 bg-gray-300 rounded" />
      <div className="h-6 w-2/3 bg-gray-300 rounded" />
      <div className="h-5 w-1/4 bg-gray-300 rounded" />
    </div>
  );
}
