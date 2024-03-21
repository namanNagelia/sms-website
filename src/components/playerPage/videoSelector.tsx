"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

interface VideoSelectorProps {
  videoLinks: { title: string, link: string }[];
  title: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>
}

const VideoSelector: React.FC<VideoSelectorProps> = ({ videoLinks, title, handleChange }) => {
  return (
    <div className="bg-black overflow-y-scroll rounded-2xl h-full">
      <div className="w-[100%] flex flex-col justify-center items-center space-y-2 relative">

        <div className="font-dinCondensed text-brandWhite bg-black text-3xl sticky top-0  w-full flex flex-col items-center pt-2 z-50" >
          {title}
          <div className="h-1 bg-brandGrey w-4/5 rounded-md" />
        </div>

        {videoLinks.map((link, index) => {
          return <HighlightCard video={link} key={index} handleChange={handleChange} />
        })}

      </div>
    </div>
  );
};

const HighlightCard = (
  { video, handleChange }:
    { video: { title: string, link: string }, handleChange: React.Dispatch<React.SetStateAction<string>> }
) => {
  return (
    <button
      className="bg-brandBlack w-4/5 rounded-2xl flex flex-row p-4 text-brandWhite items-center space-x-2 font-dinCondensed"
      onClick={() => { handleChange(video.link) }}
    >
      <div className="h-16 w-16 bg-brandWhite rounded-full"></div>
      <div className="flex flex-col items-start">
        <div className=" text-xl">{video.title}</div>
        <div className=" text-brandGrey">Timestamp</div>
      </div>

    </button>
  );
};
export default VideoSelector;
