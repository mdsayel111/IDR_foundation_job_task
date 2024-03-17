import { Dua } from "@/commonTypes/commonTypes";
import Image from "next/image";
import React from "react";

const SubCategory = ({ data }: { data: Dua }) => {
  // handle duas div onclick
  function handleDuasDivOnclick(e: any) {
    // Catch the navitem div that was clicked
    const navItemDiv = e.currentTarget;
    // Catch the navitem div which will be active
    const subcategoryDiv = navItemDiv.querySelector(".dua-div");
    // catch all sub category which has className active-sub-category
    const activeSubCategory: any =
      document.getElementsByClassName("active-dua-div");
    // remove active-sub-category className if activeSUbCategory.length > 0
    if (activeSubCategory.length > 0) {
      activeSubCategory[0].classList.remove("active-dua-div");
    }
    // add active-sub-category className which need to active
    subcategoryDiv.classList.add("active-dua-div");
  }
  return (
    <div onClick={handleDuasDivOnclick} className="duas-div">
      <div className="mt-4 pl-4 flex items-center space-x-3 dua-div">
        <Image
          src={"https://duaruqyah.com/assets/duaarrow.svg"}
          width={20}
          height={10}
          alt="img"
        />
        <h6 className="pt-2 cursor-pointer">{data.dua_name}</h6>
      </div>
    </div>
  );
};

export default SubCategory;
