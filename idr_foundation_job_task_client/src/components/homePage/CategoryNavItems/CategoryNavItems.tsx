"use client";
import Category from "@/commonTypes/commonTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SubCategory from "../SubCategory/SubCategory";
import "./CategoryNavItems.css";

const CategoryNavItems = ({ data }: { data: Category[] }) => {
  const router = useRouter();
  // handle category div onclick
  function handleCategoryOnclick(e: any, categoryName: string) {
    e.preventDefault();
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
      activeSubCategory[0].classList.remove("active-sub-category");
    }
    // add active-sub-category className which need to active
    subcategoryDiv.classList.add("active-sub-category");
    console.log(categoryName);
    router.push(`/${categoryName}`);
  }

  // handle sub category div onclick
  function handleSubCategoryOnclick(e: any) {
    e.preventDefault();
    // Catch the navitem div that was clicked
    const navItemDiv = e.currentTarget;
    // Catch the navitem div which will be active
    const subcategoryDiv = navItemDiv.querySelector(".duas-div");
    // catch all sub category which has className active-sub-category
    const activeSubCategory: any =
      document.getElementsByClassName("active-duas-div");
    // remove active-sub-category className if activeSUbCategory.length > 0
    if (activeSubCategory.length > 0) {
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
      {data.map((category) => (
        <div
          key={category.id}
          onClick={(e) => handleCategoryOnclick(e, category.cat_name_en)}
        >
          <div className="flex items-center gap-3 mt-4 hover:bg-[#EBEEF2] rounded-lg p-2 cursor-pointer">
            <Image src={category.cat_icon} width={40} height={40} alt="icon" />
            <div>
              <h3>{category.cat_name_en}</h3>
              <p className="text-gray-400">
                subcategory: {category.no_of_subcat}
              </p>
            </div>
          </div>
          <div>
            <div className="border-l-[#1FA45B] border-dashed border-l-2 ml-8 sub-category">
              {/* render all sub category */}
              {Object.entries(category.sub_category).map(
                ([subCategory, duas], index) => (
                  <>
                    <div
                      onClick={handleSubCategoryOnclick}
                      className="relative before:w-3 before:h-3 before:bg-[#1FA45B] before:rounded-full before:block before:absolute before:top-2 -ml-[7px] cursor-pointer"
                    >
                      <h6 className="pl-6">{subCategory}</h6>
                      {duas.map((dua, index) => (
                        <SubCategory key={index} data={dua} />
                      ))}
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryNavItems;
