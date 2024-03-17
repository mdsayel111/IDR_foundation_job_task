import { ChangeEventHandler } from "react";
import { IoSearchOutline } from "react-icons/io5";

const CategorySearcBar = ({
  className,
  handleSearch,
}: {
  className?: string;
  handleSearch: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        onChange={handleSearch}
        type="text"
        id="category-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[white] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-black placeholder:text-center pl-10"
        placeholder="search by category"
        required
      />
      <div className="absolute left-2 top-2 px-2 py-1">
        <IoSearchOutline className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CategorySearcBar;
