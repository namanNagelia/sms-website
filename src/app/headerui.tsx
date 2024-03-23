"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/../public/SMSLogo.png";
import Search from "@/../public/search.svg";
interface Props {
  playerData: {
    firstPlayer: any[];
  };
}
function HeaderUI(props: Props) {
  const handleClick = () => {
    window.location.href = "/";
  };
  const players = props.playerData.firstPlayer;

  return (
    <header className="w-screen p-6 space-x-10 sticky top-0 items-center z-50">
      <div
        className=" flex mr-auto items-center space-x-6 hover:cursor-pointer"
        onClick={handleClick}
      >
        <Image src={Logo} alt="asd" className="w-12" />
        <text
          className="text-brandWhite text-4xl font-dinCondensed"
          style={{ fontWeight: 700 }}
        >
          Spark My Sport
        </text>
      </div>

      <div id="Buttons" className="flex space-x-6">
        <SearchButton />
        <LoginButton />
      </div>
    </header>
  );
}
export function SearchButton() {
  const [isSearchVisible, setSearchVisible] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <button className="hover:scale-110 ">
      <Image src={Search} alt="" />
    </button>
  );
}

export function LoginButton() {
  return (
    <button className="login font-dinCondensed text-brandWhite text-2xl justify-center hover:scale-110">
      Login
    </button>
  );
}

export default HeaderUI;
