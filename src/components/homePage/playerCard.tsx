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

export default function PlayerCard(props: playerProps) {
  const name = props.name;
  const position = props.position;
  const number = props.number;
  const school = props.school;
  const imageURL = props.imageURL;
  const ranking = props.ranking;
  const change = props.change;
  return (
    <div
      className="w-[450px] h-[200px] border-2 border-white bg-black flex overflow-hidden"
      style={{ borderRadius: "60px" }}
    >
      {/* Using an img tag for simplicity and alignment */}
      <div className="flex justify-between">
        <div className="flex items-end justify-start">
          <img src={props.imageURL} alt={props.name} width="200" height="200" />
        </div>

        <div className="mt-3 ml-4 text-left">
          <div className="flex justify-between ">
            <h1 className="text-2xl text-white font-dinAlternate mb-3">
              {name}
            </h1>
          </div>
          <p className="text-lg text-white font-dinCondensed mb-2">
            Position | {position}
          </p>
          <p className="text-lg text-white font-dinCondensed mb-2">
            Number | {number}
          </p>
          <p className="text-lg text-white font-dinCondensed mb-2">
            School | {school}
          </p>
        </div>
        <div className="mt-3 text-right flex">
          <h1 className="text-2xl text-white font-dinAlternate">{ranking}</h1>{" "}
          {change > 0 && <span className="text-green-500">↑</span>}
          {change < 0 && <span className="text-red-500">↓</span>}
          {change === 0 && <span className="text-yellow-500">—</span>}
        </div>
      </div>
    </div>
  );
}
