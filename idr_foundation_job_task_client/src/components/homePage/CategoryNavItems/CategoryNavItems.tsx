"use client";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import "./CategoryNavItems.css";

const navItemsArr = [
  {
    id: 1,
    cat_id: 1,
    cat_name_bn: "দোয়ার গুরুত্ব",
    cat_name_en: "Dua's Importance",
    no_of_subcat: 7,
    no_of_dua: 21,
    cat_icon: "https://duaruqyah.com/assets/icon/duar_gurutto.svg",
  },
];

const CategoryNavItems = () => {
  // handle category div onclick
  function handleCategoryOnclick(e: any) {
    // Catch the navitem div that was clicked
    const navItemDiv = e.currentTarget;
    // Catch the navitem div which will be active
    const subcategoryDiv = navItemDiv.querySelector(".sub-category");
    // catch all sub category which has className active-sub-category
    const activeSubCategory: any = document.getElementsByClassName(
      "active-sub-category"
    );
    // remove active-sub-category className if activeSUbCategory.length > 0
    if (activeSubCategory.length > 0) {
      console.log(activeSubCategory, subcategoryDiv);
      activeSubCategory[0].classList.remove("active-sub-category");
    }
    // add active-sub-category className which need to active
    subcategoryDiv.classList.add("active-sub-category");
  }
  // handle sub category div onclick
  function handleSubCategoryOnclick(e: any) {
    // Catch the navitem div that was clicked
    const navItemDiv = e.currentTarget;
    // Catch the navitem div which will be active
    const subcategoryDiv = navItemDiv.querySelector(".duas-div");
    // catch all sub category which has className active-sub-category
    const activeSubCategory: any =
      document.getElementsByClassName("active-duas-div");
    // remove active-sub-category className if activeSUbCategory.length > 0
    if (activeSubCategory.length > 0) {
      console.log(activeSubCategory, subcategoryDiv);
      activeSubCategory[0].classList.remove("active-duas-div");
    }
    // add active-sub-category className which need to active
    subcategoryDiv.classList.add("active-duas-div");
  }
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
    <div>
      <div onClick={handleCategoryOnclick}>
        <div className="flex items-center gap-3 mt-4 hover:bg-[#EBEEF2] rounded-lg p-2 cursor-pointer">
          <Image
            src={navItemsArr[0].cat_icon}
            width={40}
            height={40}
            alt="icon"
          />
          <div>
            <h3>{navItemsArr[0].cat_name_en}</h3>
            <p className="text-gray-400">
              subcategory: {navItemsArr[0].no_of_subcat}
            </p>
          </div>
        </div>
        <div
          onClick={handleSubCategoryOnclick}
          className="border-l-[#1FA45B] border-dashed border-l-2 ml-8 sub-category"
        >
          <div className="relative before:w-3 before:h-3 before:bg-[#1FA45B] before:rounded-full before:block before:absolute before:top-2 -ml-[7px] cursor-pointer">
            <h6 className="pl-6">ctaegory name</h6>
          </div>
          <div onClick={handleDuasDivOnclick} className="duas-div">
            <div className="mt-4 pl-4 flex items-center space-x-3 dua-div">
              <Image
                src={"https://duaruqyah.com/assets/duaarrow.svg"}
                width={20}
                height={10}
                alt="img"
              />
              <h6 className="pt-2 cursor-pointer">dua name</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavItems;
