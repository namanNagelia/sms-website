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
      className="w-[300px] h-[125px] bg-layerTwoGrey rounded-3xl"
      style={{ borderRadius: "50px" }}
    >
      <div className="items-center justify-center">
        <div className="flex ml-4 items-center justify-center mt-6">
          <div className="mt-6 flex">
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
        <div className="flex ml-4 items-center justify-center mt-6">
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
