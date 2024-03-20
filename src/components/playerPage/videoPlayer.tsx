import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import React from "react";

interface Props {
  videoLink: string;
}

export default function VideoPlayer(props: Props) {
  const videoLink = props.videoLink;
  return (
    <div>
      {" "}
      {/* Added this div */}
      <MediaPlayer title="Highlights" src={videoLink}>
        <MediaProvider />

        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
}
