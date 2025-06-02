import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] md:pt-80 p-6 md:px-16 absolute bg-gradient-to-r from-black text-white">
      <h1 className="font-bold md:text-6xl text-2xl">{title}</h1>
      <p className="hidden xl:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black my-4 px-3 py-2 text-sm md:p-2 md:px-12 md:text-lg rounded-lg font-bold hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white bg-opacity-75  text-sm p-2 m-2 md:mx-3 md:p-2 md:px-11 md:text-lg rounded-lg font-bold hover:bg-opacity-30">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
