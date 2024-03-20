import React from "react";
import Image from "next/image";
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

  return <div></div>;
}
