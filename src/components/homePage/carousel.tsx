import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import PlayerCard from "./playerCard";
type PlayerType = {
  name: string;
  position: string;
  number: number;
  school: string;
  imageURL: string;
  ranking: number;
  change: number;
};

type PropType = {
  players: PlayerType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ players, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {players.map((player, index) => (
            <div className="embla__slide" key={index}>
              <PlayerCard {...player} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
