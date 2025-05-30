import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-80 px-24 absolute bg-gradient-to-r from-black text-white">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-12 text-lg rounded-lg font-bold hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white bg-opacity-75 mx-3 p-2 px-11 text-lg rounded-lg font-bold hover:bg-opacity-30">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
