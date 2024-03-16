import Avatar from "@/components/homePage/Avatar/Avatar";
import CategoryItems from "@/components/homePage/CategoryItems/CategoryItems";
import CategoryNav from "@/components/homePage/CategoryNav/CategoryNav";
import Drawar from "@/components/homePage/Drawar/Drawar";
import Navbar from "@/components/homePage/Navbar/Navbar";
import SeachBar from "@/components/homePage/SearchBar/SeachBar";

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="w-[10%]">
        <Navbar />
      </div>
      <div className="mt-5 mx-8  w-full">
        <div className="flex justify-between">
          <h1 className="text-2xl">Dua Page</h1>
          <div className="flex space-x-4 items-center">
            <SeachBar />
            <Avatar />
            <Drawar />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="w-[66%]">
            <CategoryNav />
          </div>
          <div className=" flex-grow mt-4">
            <CategoryItems />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
