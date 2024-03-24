import React from "react";
import Image from "next/image";
import defaultImage from "../../../public/Male Unknown.svg";

type playerProps = {
  data: {
    user_id: number;
    user_jersey_no: number;
    user_first_name: string;
    user_last_name: string;
    user_position: string;
    ranking: number;
    change: number;
    user_pic_url: string;
    user_height: string;
    user_year_of_graduation: number;
  };
  grade?: number;
};

const PlayerCard = (props: playerProps) => {
  const Player_ID = props.data.user_id;
  const number = props.data.user_jersey_no;
  const name = `${props.data.user_first_name} ${props.data.user_last_name}`;
  const position = props.data.user_position;
  const ranking = props.data.ranking;
  const change = props.data.change;
  const graduation = props.data.user_year_of_graduation;
  var imageURL = props.data.user_pic_url;
  if (imageURL === "|" || imageURL === "" || imageURL === null) {
    imageURL = defaultImage;
  }
  const height = props.data.user_height;
  const handleClicked = (id: number) => {
    window.location.href = `/player/${id}`;
  };

  return (
    <div
      className="w-[360px] lg:w-[350px] xl:w-[400px] h-[230px] border-2 border-white bg-black flex overflow-hidden relative hover:z-30
        hover:scale-105
        transition
        duration-150 mt-5 mb-10 hover:cursor-pointer
  "
      style={{ borderRadius: "60px" }}
      onClick={() => handleClicked(Player_ID)}
    >
      {/* Using an img tag for simplicity and alignment */}
      <div className="flex flex-row justify-between">
        <div className="flex items-end justify-start lg:w-[150px] xl:w-[200px]">
          <Image src={imageURL} alt={name} width="200" height="200" />
        </div>
        <div className="mt-6 text-left pl-2">
          <div className="flex justify-between">
            <h1 className="lg:text-lg xl:text-2xl text-white font-dinAlternate mb-3">
              {name}
            </h1>
          </div>
          {/* Position */}
          <div className="lg:bs xl:text-lg text-white font-dinCondensed mb-2 flex flex-row lg:w-40 w-[8.5rem]">
            <p className="w-12 lg:w-14 text-brandGrey">Position</p>
            <p className="mr-auto">|</p>
            <p>{position}</p>
          </div>
          {/* Number */}
          <div className="lg:bs xl:text-lg text-white font-dinCondensed mb-2 flex flex-row lg:w-40 w-[8.5rem]">
            <p className="w-12 lg:w-14 text-brandGrey">Number</p>
            <p className="mr-auto">|</p>
            <p>{number}</p>
          </div>
          <div className="lg:bs xl:text-lg text-white font-dinCondensed mb-2 flex flex-row lg:w-40 w-[8.5rem]">
            <p className="w-12 lg:w-14 text-brandGrey">Class</p>
            <p className="mr-auto">|</p>
            <p>{graduation}</p>
          </div>
        </div>
        <div className="mt-3 text-right flex absolute bottom-4 right-10">
          <h1 className="lg:text-xl xl:text-2xl text-white font-dinAlternate">
            {ranking}
          </h1>{" "}
          {/* {change > 0 && <span className="text-green-500">↑</span>}
            {change < 0 && <span className="text-red-500">↓</span>}
            {change === 0 && <span className="text-yellow-500">—</span>} */}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
