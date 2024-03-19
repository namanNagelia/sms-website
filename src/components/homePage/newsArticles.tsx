import React from "react";
import Image from "next/image";

interface newsProps {
  title: string;
  date: string;
  premium: boolean;
  imageURL: string;
  redirectURL: string;
}

export default function NewsArticles(props: newsProps) {
  const title = props.title;
  const date = props.date;
  const premium = props.premium;
  const imageURL = props.imageURL;
  const redirectURL = props.redirectURL;
  const handleClick = () => {
    window.open(redirectURL, "_blank");
  };

  return (
    <div className="transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer mt-12">
      {premium && (
        <span className="bg-yellow-500 text-white font-dinCondensed px-2 py-1 rounded-t-full absolute -top-6 right-2 p-1">
          $ Spark+
        </span>
      )}
      <div
        className="relative w-[500px] h-[281px] rounded-3xl overflow-hidden"
        onClick={handleClick}
      >
        <img
          src={imageURL}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-brandBlack text-white p-2 flex justify-between items-center">
          <h2 className="text-lg text-brandWhite font-dinBold">{title}</h2>
        </div>
      </div>
    </div>
  );
}
