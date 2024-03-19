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
  return (
    <div className="relative mx-48 mt-4 w-[500px] h-[300px] rounded-3xl">
      <Image
        src={imageURL}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-3xl"
      />{" "}
      <div className="absolute bottom-0 left-0 right-0 bg-brandBlack text-white p-2 bg">
        <h2 className="text-lg text-brandWhite font-dinBold">{title}</h2>
      </div>
    </div>
  );
}
