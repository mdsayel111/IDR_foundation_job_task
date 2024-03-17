"use client";
import React, { useState } from "react";
import { RiSettings2Fill } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import { SlDrawer } from "react-icons/sl";
import { RiApps2Line } from "react-icons/ri";
import { AiOutlineFontSize } from "react-icons/ai";
import "./Drawar.css";

const Drawar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* drawer init and toggle */}
      <div className="text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-[#1FA45B] text-2xl
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg lg:mb-2  focus:outline-none dark:focus:ring-blue-800"
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
            className="fixed top-0 right-[250px] lg:right-[320px] z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-60 lg:w-80 dark:bg-white "
            tabIndex={-1}
            aria-labelledby="drawer-right-label"
          >
            <h1 className="text-lg lg:text-2xl text-center mt-10">Settings</h1>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-sm lg:text-xl active-setting bg-gray-200">
                <div className="bg-[#EBEEF2] p-1 lg:p-2 rounded-full">
                  <IoLanguage />
                </div>
                <h5>Language</h5>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-sm lg:text-xl bg-gray-200 py-4 pl-4">
                <div className="bg-[#EBEEF2] p-2 rounded-full">
                  <SlDrawer />
                </div>

                <h5>Genaral</h5>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-sm lg:text-xl bg-gray-200 py-4 pl-4">
                <div className="bg-[#EBEEF2] p-2 rounded-full">
                  <RiApps2Line />
                </div>

                <h5>Font</h5>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-sm lg:text-xl bg-gray-200 py-4 pl-4">
                <div className="bg-[#EBEEF2] p-2 rounded-full">
                  <AiOutlineFontSize />
                </div>

                <h5>Appearance</h5>
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
