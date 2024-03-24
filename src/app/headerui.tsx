"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/../public/SMSLogo.png";
import Search from "@/../public/search.svg";
import { setServers } from "dns";

interface Props {
  playerData: {
    firstPlayer: {
      user_height: string;
      user_first_name: string;
      user_jersey_no: number;
      user_last_name: string;
      user_pic_url: string; //URL to be specfic
      user_position: string;
      user_year_of_graduation: number;
      id: number;
      unique_id: number;
    }[];
  };
}
function HeaderUI(props: Props) {
  const [search, setSearch] = useState<boolean>(false);
  const [searchQuery, setQuery] = useState<string>("");
  const [names, setNames] = useState<JSX.Element[]>([]);
  const handleClick = () => {
    window.location.href = "/";
  };

  const handleNewQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setQuery(newSearch);
    if (newSearch.length == 0) {
      setNames([]);
    } else {
      playerSearch(newSearch);
    }
  };
  const playerSearch = (searchTerm: string) => {
    var list: JSX.Element[] = [];
    players.map((player) => {
      if (
        player.user_first_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        player.user_last_name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        list.push(
          <button
            className="text-brandWhite"
            onClick={() => handlePlayerClicked(player.id)}
          >
            {player.user_first_name} {player.user_last_name}
          </button>
        );
      }
    });
    setNames(list);
  };
  const handlePlayerClicked = (id: number) => {
    window.location.href = `/player/${id}`;
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

      <div id="Buttons" className="flex space-x-6 flex-row items-center">
        {search ? (
          <div className="relative">
            <input
              className="rounded-full bg-brandBlack border-2 border-buttonBlue w-72 text-brandWhite px-4 font-dinCondensed"
              type="text"
              value={searchQuery}
              onChange={(e) => handleNewQuery(e)}
            />

            {
              <div className="absolute w-72 h-24 overflow-y-scroll bg-brandBlack rounded-2xl px-4 hide-scroll flex flex-col items-start">
                {names}
              </div>
            }
          </div>
        ) : (
          <></>
        )}
        <SearchButton search={search} setSearch={setSearch} />
        <LoginButton />
      </div>
    </header>
  );
}
export function SearchButton({
  search,
  setSearch,
}: {
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button className="hover:scale-110 " onClick={() => setSearch(!search)}>
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

interface SearchProps {
  shownPlayers: string[];
}

export const playerSearchModal: React.FC<SearchProps> = ({ shownPlayers }) => {
  return (
    <>
      <input
        className="rounded-full bg-brandBlack border-2 border-buttonBlue w-72 text-brandWhite px-4"
        type="text"
      />

      <div className="absolute top-0 w-72 h-24 overflow-y-visible">
        <li />
        <li />
        <li />
        <li />
        <li />
      </div>
    </>
  );
};

export default HeaderUI;
