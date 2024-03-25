"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/../public/SMSLogo.png";
import Search from "@/../public/search.svg";
import { setServers } from "dns";

interface Props {
  playerData:{
    firstPlayer: {
      Height: string
      Player_First_Name: string
      Player_Jersey_No: number
      Player_Last_Name: string
      Player_Picture_URL: string //URL to be specfic 
      Position: string
      School_Name: string
      Year_of_Graduation: number
      id: number
      unique_id: number
    }[]
  };
}
function HeaderUI(props: Props) {
  const [search, setSearch] = useState<boolean>(true);
  const [searchQuery, setQuery] = useState<string>("");
  const [names, setNames] = useState<JSX.Element[]>([])
  const handleClick = () => {
    window.location.href = "/";
  };


  const handleNewQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setQuery(newSearch);
    if(newSearch.length == 0){
      setNames([])
    }else{
      playerSearch(newSearch);
    }
  }
  const playerSearch = (searchTerm : string) =>{
    var list : JSX.Element[] = []
    players.map(player => {
      if(
        player.Player_First_Name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        player.Player_Last_Name.toLowerCase().includes(searchTerm.toLowerCase())
      ){
        list.push(
          <button className="text-brandWhite flex flex-row items-center text-2x space-x-2" onClick={() => handlePlayerClicked(player.id)}>
            <Image src={player.Player_Picture_URL} alt="" width={24} height={24} className="rounded-full"/>
            <text> {player.Player_First_Name} {player.Player_Last_Name}</text>
          </button>
        )
      }
    })
    setNames(list)
  }
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
        {(search ?
          <div className="relative">
            <input
              className="rounded-xl bg-brandBlack border-2 border-buttonBlue w-72 h-12 text-brandWhite px-4 font-dinCondensed text-xl"
              type="text"
              value={searchQuery}
              onChange={e => handleNewQuery(e)}
            />

            {(names.length != 0 ? 
              <div className="absolute w-72 max-h-28 hit-fit overflow-y-scroll bg-brandBlack rounded-2xl px-4 hide-scroll flex flex-col items-start space-y-2 p-2">

                {names}

              </div>
            : <></>)}
          </div> :
          <></>
        )}
        <SearchButton search={search} setSearch={setSearch} />
        <LoginButton />
      </div>
    </header>
  );
}
export function SearchButton({search, setSearch} : {search:boolean, setSearch: React.Dispatch<React.SetStateAction<boolean>>}) {
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
  shownPlayers: string[]
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
}

export default HeaderUI;
