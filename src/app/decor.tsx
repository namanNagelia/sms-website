import React from "react";
import decor from "@/../public/decor.svg";
import Image from "next/image";

export default function Decor(){
    return(
        <Image src={decor} alt="" className="absolute top-48 w-full"/>
    );
}