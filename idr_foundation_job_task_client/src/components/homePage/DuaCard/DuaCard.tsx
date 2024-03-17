"use client";
import { Dua } from "@/commonTypes/commonTypes";
import Image from "next/image";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import toast from "react-hot-toast";
import { CiShuffle } from "react-icons/ci";
import { FaPlay, FaRegLightbulb } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdContentCopy, MdOutlinePauseCircleFilled } from "react-icons/md";
import Modal from "../Modal/Modal";
import "./DuaCard.css";

const DuaCard = ({ dua, order }: { dua: Dua; order: number }) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isBookmark, setIsBookmark] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [intervalArr, setIntervalArr] = useState<number[]>([]);

  // handle copy, share and etc. button onclick
  const handleIconOnclick = (str = "comming soon inshallah") => {
    toast(
      <div className="flex items-center gap-4">
        <Image
          src={"https://duaruqyah.com/assets/popup/tickMark.svg"}
          width={20}
          height={20}
          alt="active"
          className=""
        />
        {str}
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
  //   handle audio track change
  const handleAudioOnchange: ChangeEventHandler = (e) => {
    const input: any = e.currentTarget;
    const value = Number(input.value);
    const audio: any = document.getElementById("audio");
    // audio duration in milisecond
    const audioDuration = audio.duration * 1000;
    // set audio start time according input range
    audio.currentTime = (audioDuration / 1000 / 100) * Number(value);
    audio?.play();
    setDuration(audioDuration);
    setValue(value);
    // clear all setIntarval
    intervalArr.map((intervalId) => clearInterval(intervalId));
    // call setIntarval for change value
    const setIntervalId: any = setInterval(() => {
      setValue((value) => value + 100 / (audioDuration / 1000));
    }, 1000);
    // set timeout id array
    setIntervalArr([...intervalArr, setIntervalId]);
  };
  //   handle play button onclick
  const handleAudioPlay: MouseEventHandler = (e) => {
    const audio: any = document.getElementById("audio");
    // get audio duration in milisecond
    const audioDuration = audio.duration * 1000;
    // set audio start time
    audio.currentTime = (audioDuration / 1000 / 100) * value;
    audio?.play();
    setDuration(audioDuration);
    setIsPlay(true);
    // clear all interval
    intervalArr.map((intervalId) => clearInterval(intervalId));
    // get interval id
    const setIntervalId: any = setInterval(() => {
      setValue((value) => value + 100 / (audioDuration / 1000));
    }, 1000);
    // set interval id in interval array
    setIntervalArr([...intervalArr, setIntervalId]);
    setIsPlay(true);
  };
  // clear all interval if input range value >= 100
  if (value >= 100) {
    intervalArr.map((intervalId) => clearInterval(intervalId));
    setIntervalArr([]);
    setValue(0);
    setIsPlay(false);
  }
  return (
    <div className="bg-white mt-4 p-4">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Image
            src={"https://duaruqyah.com/assets/duacard.svg"}
            width={30}
            height={30}
            alt="img"
          />
          <p className="text-[#1FA45B] font-bold">
            {dua.id} {dua.dua_name}
          </p>
        </div>
        <p>{dua.dua_description}</p>
        <h2 className="text-4xl text-right">{dua.dua}</h2>
        <p>
          Transliteration: Laa ilaaha illallahu wahdahu laa sharika lahu,
          lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir.
          Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa
          laa yanfa'u dhal-jaddi minka al-jaddu
        </p>
        <p className="text-[#1FA45B]">Reference:</p>
        <p>{dua.reference}</p>
        <div className="flex flex-col lg:flex-row gap-4 justify-between lg:items-center">
          <div className=" w-full lg:w-fit flex items-center gap-4">
            <button
              onClick={handleAudioPlay}
              className="w-8 h-8 lg:w-16 lg:h-16 rounded-full bg-[#1FA45B] focus:outline-none"
            >
              {isPlay ? (
                <MdOutlinePauseCircleFilled
                  className="text-white lg:text-4xl mx-auto"
                  id="play-btn"
                />
              ) : (
                <FaPlay
                  className="text-white lg:text-2xl mx-auto"
                  id="play-btn"
                />
              )}
            </button>
            <audio
              className="hidden"
              id="audio"
              src="https://api.duaruqyah.com/duaaudiofinal/7.mp3"
            ></audio>
            {isPlay ? (
              <div className="flex w-[80%] lg:w-auto items-center gap-4">
                <input
                  className="w-[40%] lg:w-auto"
                  onChange={handleAudioOnchange}
                  type="range"
                  value={value + ""}
                  style={{ backgroundSize: `${value}%` }}
                />
                <p>
                  00 /
                  {
                    // convert duration milisecond to second and and render duration according duration > 10
                    Number((Number(duration / 1000 / 100) * value).toFixed(0)) <
                    10
                      ? "0" + (Number(duration / 1000 / 100) * value).toFixed(0)
                      : (Number(duration / 1000 / 100) * value).toFixed(0)
                  }
                </p>
                <CiShuffle className="text-2xl" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex gap-4 text-2xl cursor-pointer">
            <MdContentCopy onClick={() => handleIconOnclick("copied")} />
            {/* modal for bookmark */}
            <Modal setIsBookmark={setIsBookmark} isBookmark={isBookmark} />

            <FaRegLightbulb onClick={() => handleIconOnclick()} />
            <IoShareSocialOutline onClick={() => handleIconOnclick()} />
            <IoMdInformationCircleOutline onClick={() => handleIconOnclick()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
