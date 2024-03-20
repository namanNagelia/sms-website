"use client";
import React from "react";
import { useEffect, useRef } from "react";

interface VideoSelectorProps {
  videoLinks: string;
  title: string;
}

const VideoSelector: React.FC<VideoSelectorProps> = ({ videoLinks, title }) => {
  return (
    <div className="bg-black overflow-y-scroll rounded-2xl">
      <div className="w-[100%] border-white">
        <div className="font-dinCondensed text-brandWhite text-3xl">
          {title}
        </div>
        <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
      </div>
    </div>
  );
};

const card = () => {
  return <div></div>;
};
export default VideoSelector;
