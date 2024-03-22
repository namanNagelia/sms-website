import React from "react";
import Image from "next/image";
import defaultImage from "@/../public/Male Unknown.svg";

interface Props {
  picture: string;
  id: number;
  graduation: string;
  name: string;
  position: string;
}

export const RosterCard: React.FC<Props> = ({
  picture,
  id,
  graduation,
  name,
  position,
}) => {
  var imageURL = picture;
  if (imageURL === "|") {
    imageURL = defaultImage;
  }
  return (
    <div
      className="w-[18vw] h-auto pt-4 rounded-3xl flex items-center justify-center"
      style={{ background: "linear-gradient(to bottom, #CF6C57, #99B0BD)" }}
    >
      <div className="text-center w-full items-center justify-center">
        <h1 className="font-dinBold text-white text-3xl">{name}</h1>
        <div className="flex justify-center items-center">
          <Image
            src={imageURL}
            alt={"playerPic"}
            width={100}
            height={100}
            objectFit="cover"
            className="mt-3"
          />
        </div>
        <div className="mt-3 bg-black bg-opacity-50 p-3  w-full">
          <p className="text-white">{graduation}</p>
          <p className="text-white">{position}</p>
          <button className="mt-2 bg-white text-black px-4 py-2 rounded">
            Visit Player Page
          </button>
        </div>
      </div>
    </div>
  );
};
