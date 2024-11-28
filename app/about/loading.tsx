import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center">
        <Image
          src="/logo.svg"
          alt="Wepz Academy Logo"
          className="mb-4 w-32"
          height={100}
          width={100}
        />
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        <h1 className="mt-4 text-3xl font-semibold text-gray-800">
          Please wait while we prepare your content...
        </h1>
      </div>
    </div>
  );
};

export default Loading;
