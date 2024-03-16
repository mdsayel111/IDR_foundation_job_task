import Image from "next/image";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const Avatar = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <Image
        width={50}
        height={50}
        className="w-10 h-10 rounded-full mr-1"
        src="https://duaruqyah.com/assets/settings/profile.svg"
        alt="Rounded avatar"
      />
      <MdArrowDropDown className="text-xl" />
    </div>
  );
};

export default Avatar;
