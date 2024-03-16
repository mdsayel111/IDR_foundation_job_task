import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SeachBar = ({ className }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[white] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-black"
        placeholder="search by name"
        required
      />
      <div className="absolute right-2 top-2 bg-[#EBEEF2] px-2 py-1">
        <IoSearchOutline className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SeachBar;
