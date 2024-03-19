import React from "react";
import Image from "next/image";

interface playerProps {
  name: string;
  position: string;
  number: number;
  school: string;
  imageURL: string;
  ranking: number;
  change: number;
}

const PlayerCard = (props: playerProps) => {
  const name = props.name;
  const position = props.position;
  const number = props.number;
  const school = props.school;
  const imageURL = props.imageURL;
  const ranking = props.ranking;
  const change = props.change;
  return (
    <div
      className="w-[450px] h-[200px] border-2 border-white bg-black flex overflow-hidden relative"
      style={{ borderRadius: "60px" }}
    >
      {/* Using an img tag for simplicity and alignment */}
      <div className="flex flex-row justify-between">
        <div className="flex items-end justify-start w-[200px]">
          <img src={props.imageURL} alt={props.name} width="200" height="200" />
        </div>

        <div className="mt-3 ml-4 text-left">
          <div className="flex justify-between">
            <h1 className="text-2xl text-white font-dinAlternate mb-3">
              {name}
            </h1>
          </div>
          {/* Position */}
          <div className="text-lg text-white font-dinCondensed mb-2 flex flex-row w-32">
            <p className="w-14 text-brandGrey">
              Position
            </p>
            <p className="mr-auto">
              |
            </p>
            <p>
              {position}
            </p>
          </div>
          {/* Number */}
          <div className="text-lg text-white font-dinCondensed mb-2 flex flex-row w-32">
            <p className="w-14 text-brandGrey">
              Number
            </p>
            <p className="mr-auto">
              |
            </p>
            <p>
              {number}
            </p>
          </div>
          {/* School */}
          <div className="text-lg text-white font-dinCondensed mb-2 flex flex-row w-32">
            <p className="w-14 text-brandGrey">
              School
            </p>
            <p className="mr-auto">
              |
            </p>
            <p>
              {school}
            </p>
          </div>

        </div>
        <div className="mt-3 text-right flex absolute bottom-4 right-10">
          <h1 className="text-2xl text-white font-dinAlternate">{ranking}</h1>{" "}
          {change > 0 && <span className="text-green-500">↑</span>}
          {change < 0 && <span className="text-red-500">↓</span>}
          {change === 0 && <span className="text-yellow-500">—</span>}
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;