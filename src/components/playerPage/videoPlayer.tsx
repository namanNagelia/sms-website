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
        {/* <Poster
          className="vds-poster"
          src="https://media-files.vidstack.io/sprite-fight/poster.webp"
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        /> */}
        <DefaultVideoLayout
          thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    </div>
  );
}
