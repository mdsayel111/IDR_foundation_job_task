import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoBookOutline } from "react-icons/io5";
import NavLInk from "../NavLink/NavLInk";
import NavWithLogo from "../NavWithLogo/NavWithLogo";
import { BiSolidDonateHeart } from "react-icons/bi";

// navlink arr
const navLinkArr = [
  { path: "/", logo: IoHomeOutline },
  { path: "/all_dua", logo: AiOutlineAppstore },
  { path: "/memorize", logo: FaRegLightbulb },
  { path: "/bookmark", logo: CiBookmark },
  { path: "/ruqaya", logo: IoAddCircleOutline },
  { path: "/dua_info", logo: TiMessages },
  { path: "/books", logo: IoBookOutline },
];

const Navbar = () => {
  return (
    <div className="h-[100vh] overflow-y-scroll hidden  lg:flex flex-col items-center space-y-4 ml-5 mt-5 bg-[#FFFFFF] rounded-2xl py-10">
      <NavWithLogo
        className="cursor-pointer"
        src="https://duaruqyah.com/assets/dua-logo.svg"
      />
      {navLinkArr.map((item, index) => (
        <NavLInk className="text-lg cursor-pointer" key={index}>
          <div className="p-4 bg-[#E8F0F5] rounded-full">
            <item.logo />
          </div>
        </NavLInk>
      ))}
      <div className="bg-[#1FA45B] text-white text-3xl p-[7px] rounded-lg cursor-pointer">
        <BiSolidDonateHeart />
      </div>
    </div>
  );
};

export default Navbar;
