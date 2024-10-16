import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ title, currentPage }) => {
  return (
    <div className="relative mt-8">
      {/* Background image */}
      <div
        className="h-44 md:h-52 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('banner2.jpg')`,
          backgroundPosition: "center bottom", // Replace with your actual image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text */}
        <div className="relative text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
          <p className="mt-2 text-lg">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            &gt; {currentPage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
