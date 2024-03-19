import React from "react";

interface playerProps {
  name: string;
  position: string;
  number: number;
  school: string;
  imageURL: string;
  ranking: number;
  change: number;
}

export default function PlayerCard(props: playerProps) {
  const name = props.name;
  const position = props.position;
  const number = props.number;
  const school = props.school;
  const imageURL = props.imageURL;
  const ranking = props.ranking;
  const change = props.change;
  return (
   
  );
}
