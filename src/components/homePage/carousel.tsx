import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import PlayerCard from "./playerCard";
import "./embla.css";

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

const EmblaCarousel: React.FC<any> = ({
  items,
  options,
  cardType,
  spacing,
}: {
  items: any[];
  options?: EmblaOptionsType;
  cardType: (props: any) => React.JSX.Element;
  spacing: number;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item: any, index: any) => (
            <div
              className="embla__slide"
              key={index}
              style={{ flex: `0 0 calc(100%/${spacing})` }}
            >
              {cardType({ ...item })}
            </div>
          ))}
          <div className="embla__slide max-w-10" />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
