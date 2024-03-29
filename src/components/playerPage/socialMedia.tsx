import React from "react";
import Image from "next/image";
import instagramImage from "@/app/images/icons/Insta Icon.svg";
import xIcon from "@/app/images/icons/X Icon.svg";
import barIcon from "@/app/images/icons/Bar Icon.svg";
import eyeIcon from "@/app/images/icons/Eye Icon.svg";
interface SocialMediaProps {
  instagram: string;
  twitter: string;
  instagramFollowers: number;
  twitterFollowers: number;
  instagramViews: number;
  twitterViews: number;
}

export default function SocialMedia(props: SocialMediaProps) {
  const instagram = props.instagram;
  const twitter = props.twitter;
  const instagramFollowers = props.instagramFollowers;
  const twitterFollowers = props.twitterFollowers;
  const instagramViews = props.instagramViews;
  const twitterViews = props.twitterViews;

  return (
    <div
      className="w-[280px] h-[120px] bg-layerTwoGrey rounded-lg ml-[70%] py-4"
      style={{ borderRadius: "24px" }}
    >
      <div className="items-center justify-center h-full w-full">
        <div className="flex items-start justify-center">
          <div className="mt-2 flex">
            <Image
              src={instagramImage}
              alt="Instagram Icon"
              width={30}
              height={30}
            />
            <Image
              src={barIcon}
              alt="Bar Icon"
              width={30}
              height={30}
              className="mx-2"
            />
            <p className="font-dinBold text-xl text-white">
              {instagramFollowers}
            </p>
            <Image
              src={eyeIcon}
              alt="eye Icon"
              width={30}
              height={30}
              className="mx-2"
            />
            <p className="font-dinBold text-xl text-white">{instagramViews}</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <Image src={xIcon} alt="X Icon" width={30} height={30} />
          <Image
            src={barIcon}
            alt="Bar Icon"
            width={30}
            height={30}
            className="mx-2"
          />
          <p className="font-dinBold text-xl text-white">{twitterFollowers}</p>
          <Image
            src={eyeIcon}
            alt="eye Icon"
            width={30}
            height={30}
            className="mx-2"
          />
          <p className="font-dinBold text-xl text-white">{twitterViews}</p>
        </div>
      </div>
    </div>
  );
}
