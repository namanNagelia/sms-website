import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import PlayerCard from "./playerCard";
import "./embla.css";

type PlayerType = {
  user_id: number;
  // School_Name: string;
  user_jersey_no: number;
  user_first_name: string;
  user_last_name: string;
  user_height: string;
  user_year_of_graduation: number;
  user_position: string;
  user_pic_url: string;
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
  images,
  cardType,
  spacing,
}: {
  items: Object[];
  options?: EmblaOptionsType;
  images: Object[];
  cardType: (props: any) => React.JSX.Element;
  spacing: number;
}) => {
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
                {cardType({ ...items[index], teamData: images })}
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
