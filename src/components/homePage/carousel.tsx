import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import PlayerCard from "./playerCard";
import "./embla.css";

type PlayerType = {
  id: number;
  School_Name: string;
  Player_Jersey_No: number;
  Player_First_Name: string;
  Player_Last_Name: string;
  Height: string;
  Year_of_Graduation: number;
  Position: string;
  Player_Picture_URL: string;
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
  items: Object[];
  options?: EmblaOptionsType;
  cardType: (props: any) => React.JSX.Element;
  spacing: number;
}) => {
  console.log(items);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Object.keys(items).map((item, index) => {
            // console.log(Object.keys(items))
            // console.log(items[parseInt(item)])
            return (
              <div
                className="embla__slide"
                key={index}
                style={{ flex: `0 0 calc(100%/${spacing})` }}
              >
                {cardType({ ...items[index] })}
              </div>
            );
          })}
          <div className="embla__slide max-w-10" />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
