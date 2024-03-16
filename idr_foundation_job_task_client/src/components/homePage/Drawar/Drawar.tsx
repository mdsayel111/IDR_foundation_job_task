"use client";
import React, { useState } from "react";
import { RiSettings2Fill } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import "./Drawar.css"

const Drawar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* drawer init and toggle */}
      <div className="text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-[#1FA45B] text-2xl
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mb-2  focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <RiSettings2Fill />
        </button>
      </div>

      {isModalOpen ? (
        <>
          <div
            onClick={() => {
              setIsModalOpen(false);
              console.log("hi");
            }}
            className="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] bg-gray-400 opacity-50"
          ></div>
          {/* drawer component */}
          <div
            id="drawer-right-example"
            className="fixed top-0 right-[320px] z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-white"
            tabIndex={-1}
            aria-labelledby="drawer-right-label"
          >
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-2xl active-setting">
                <IoLanguage />
                <h5>Language</h5>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Drawar;
