import React from "react";
import SeachBar from "../SearchBar/SeachBar";
import CategorySearcBar from "@/components/homePage/CategorySearcBar/CategorySearcBar";
import CategoryNavItems from "../CategoryNavItems/CategoryNavItems";

const CategoryNav = () => {
  return (
    <div className="mt-4 bg-white">
      <h1 className="bg-[#1FA45B] text-xl text-white py-2 text-center rounded-tl-xl rounded-tr-xl">
        Categories
      </h1>
      <div className="px-4">
        <CategorySearcBar className="mt-4" />
        <CategoryNavItems />
      </div>
    </div>
  );
};

export default CategoryNav;
