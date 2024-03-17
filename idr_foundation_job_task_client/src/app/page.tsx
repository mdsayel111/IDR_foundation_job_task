import { Dua } from "@/commonTypes/commonTypes";
import CategoryItems from "@/components/homePage/CategoryItems/CategoryItems";
import axios from "axios";

const page = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  function decodeCategory(category: string) {
    return category?.replace(/%20/g, " ");
  }
  const categoryName = decodeCategory(searchParams.category);
  const res = await axios.get(
    `https://idr-foundation-job-task-server.vercel.app/duas?category=${categoryName || "Dua's Importance"}`
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
