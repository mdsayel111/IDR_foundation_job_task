import Image from "next/image";
import React from "react";
import { FaRegBookmark } from "react-icons/fa6";
import "./Modal.css";
import toast from "react-hot-toast";
import { FaBookmark } from "react-icons/fa";

export default function Modal({
  setIsBookmark,
  isBookmark,
}: {
  setIsBookmark: Function;
  isBookmark: boolean;
}) {
  const [showModal, setShowModal] = React.useState(false);
  //   handle slect color
  const handleChangeColor = (e: any) => {
    const targetColor = e.target;
    const allColorDIv: any = document.getElementsByClassName("active-color");
    // remove previous active-color class
    if (allColorDIv.length > 0) {
      allColorDIv[0].classList.remove("active-color");
    }
    // add active-color class
    targetColor.classList.add("active-color");
    console.log(targetColor);
  };
  //   handle save
  const handleSave = () => {
    setShowModal(false);
    setIsBookmark(true);
    toast(
      <div className="flex items-center gap-4">
        <Image
          src={"https://duaruqyah.com/assets/popup/tickMark.svg"}
          width={20}
          height={20}
          alt="active"
          className=""
        />
        Saved Bookmark
      </div>,
      {
        duration: 4000,
        position: "bottom-center",

        // Styling
        style: { backgroundColor: "#121212", color: "white" },
        className: "",

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: "#121212",
          secondary: "#fff",
        },

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }
    );
  };
  return (
    <>
      <button
        className="font-bold uppercase text-sm rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {isBookmark ? (
          <FaBookmark className="text-[#1FA45B] text-2xl" />
        ) : (
          <FaRegBookmark className="text-2xl" />
        )}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[430px] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Favorite</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="max-w-sm mx-auto">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
                    >
                      Folder Name
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Favorite</option>
                      <option value="US">Folder Name</option>
                      <option value="CA">Folder Name</option>
                      <option value="FR">Folder Name</option>
                      <option value="DE">Folder Name</option>
                    </select>
                  </form>
                  <div>
                    <h3 className="block mb-2 text-lg font-medium text-gray-900 dark:text-black mt-4">
                      Or,
                    </h3>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[white] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-black"
                      placeholder="creat a new document folder"
                      required
                    />
                  </div>
                  <div>
                    <h3 className="block mb-2 text-lg font-medium text-gray-900 dark:text-black mt-4">
                      Folder Color
                    </h3>
                    <div
                      onClick={handleChangeColor}
                      className="flex gap-4 colors"
                    >
                      <div className="h-12 w-12 bg-[#FFC107] rounded-xl color cursor-pointer relative">
                        <Image
                          src={
                            "https://duaruqyah.com/assets/popup/tickMark.svg"
                          }
                          width={20}
                          height={20}
                          alt="active"
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                      </div>
                      <div className="h-12 w-12 bg-[#2196F3] rounded-xl color cursor-pointer relative">
                        <Image
                          src={
                            "https://duaruqyah.com/assets/popup/tickMark.svg"
                          }
                          width={20}
                          height={20}
                          alt="active"
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                      </div>
                      <div className="h-12 w-12 bg-[#E91E63] rounded-xl color cursor-pointer relative">
                        <Image
                          src={
                            "https://duaruqyah.com/assets/popup/tickMark.svg"
                          }
                          width={20}
                          height={20}
                          alt="active"
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                      </div>
                      <div className="h-12 w-12 bg-[#1FA45B] rounded-xl color cursor-pointer relative">
                        <Image
                          src={
                            "https://duaruqyah.com/assets/popup/tickMark.svg"
                          }
                          width={20}
                          height={20}
                          alt="active"
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-black bg-[#EBEEF2] background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
