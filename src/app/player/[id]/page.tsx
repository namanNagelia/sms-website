import React from "react";
import SocialMedia from "@/components/playerPage/socialMedia";

export default function PlayerPage() {
  return (
    <div>
      <h1>Player Page</h1>
      <SocialMedia
        instagram="https://www.instagram.com/"
        twitter="https://www.twitter.com/"
        instagramFollowers={1000}
        twitterFollowers={1000}
        instagramViews={1000}
        twitterViews={1000}
      />
    </div>
  );
}
