import React from "react";
import Image from "next/image";
import defaultImage from "@/../public/Male Unknown.svg";

interface RosterProps {
  user_pic_url: string;
  user_id: number;
  user_year_of_graduation: string;
  user_first_name: string;
  user_last_name: string;
  user_position: string;
}

export const RosterCard: React.FC<RosterProps> = ({
  user_pic_url,
  user_id,
  user_year_of_graduation,
  user_first_name,
  user_last_name,
  user_position,
}) => {
  var imageURL = user_pic_url;
  if (imageURL === "|") {
    imageURL = defaultImage;
  }
  const handleClick = (id: number) => {
    window.location.href = `/player/${user_id}`;
  };
  return (
    <div
      className="w-[18vw] h-auto pt-4 rounded-3xl flex items-center justify-center"
      style={{ background: "linear-gradient(to bottom, #CF6C57, #99B0BD)" }}
    >
      <div className="text-center w-full items-center justify-center">
        <h1 className="font-dinBold text-white text-3xl">
          {user_first_name} {user_last_name}
        </h1>
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
          <p className="text-white">Class of {user_year_of_graduation}</p>
          <p className="text-white">{user_position}</p>
          <button
            className="mt-2 bg-white text-black px-4 py-2 rounded"
            onClick={() => handleClick(user_id)}
          >
            Visit Player Page
          </button>
        </div>
      </div>
    </div>
  );
};
