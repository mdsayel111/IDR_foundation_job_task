import { Dua } from "@/commonTypes/commonTypes";
import CategoryItems from "@/components/homePage/CategoryItems/CategoryItems";
import axios from "axios";
import React from "react";

const page = async ({ params }: { params: { category: string } }) => {
  function decodeCategory(category: string) {
    return category.replace(/%20/g, " ");
  }
  const categoryName = decodeCategory(params.category);
  const res = await axios.get(
    `http://localhost:5000/duas?category=${categoryName}`
  );
  const duas = res.data.duas;
  return (
    <div className="h-[100vh] overflow-y-scroll">
      {duas.map((dua: Dua, index: number) => {
        return <CategoryItems key={dua.id} dua={dua} order={index} />;
      })}
    </div>
  );
};

export default page;
