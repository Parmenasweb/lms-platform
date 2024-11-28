import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center">
        <Image
          src="/logo.svg"
          alt="Wepz Academy Logo"
          className="mb-4 w-32"
          height={100}
          width={100}
        />
        <div className="w-10 h-10 border-3 border-gray-200 dark:border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
        <h1 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Please wait while we prepare your content...
        </h1>
      </div>
    </div>
  );
};

export default Loading;
