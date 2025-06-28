import React from "react";

const Shimmer = () => {
  return (
    <div className="p-4 m-4 bg-black bg-opacity-50">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="mb-6 animate-pulse">
          <div className="h-6 bg-gray-50 rounded w-1/4 mb-4"></div>
          <div className="flex gap-4 flex-wrap">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-40 h-60 bg-gray-50 rounded shadow-md"
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
