"use client";
import React from "react";
import DuaCard from "../DuaCard/DuaCard";
import { Dua } from "@/commonTypes/commonTypes";

const CategoryItems = ({ dua, order }: { dua: Dua; order: number }) => {
  return (
    <div className="lg:mt-4">
      <h3 className=" px-2 py-3 bg-white  rounded-lg">
        <span className="text-[#1FA45B]">Section: </span>
        {dua.category}
      </h3>
      <div>
        <DuaCard dua={dua} order={order} />
      </div>
    </div>
  );
};

export default CategoryItems;
