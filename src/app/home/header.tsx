import React from "react";
import Image from "next/image";
import Logo from "@/../public/logoRed.png"
import Search from "@/../public/search.svg"

function Header() {


    return (
        <header className="w-screen p-4 space-x-10 fixed items-center">
            <Image src={Logo} alt="asd" className=" w-64 mr-auto" />

            <div id="Buttons" className="flex space-x-6">
                <SearchButton />
                <LoginButton />
            </div>
        </header>
    );
}
export function SearchButton(){
    return(
        <button className="hover:scale-110">
            <Image src={Search} alt=""  />
        </button>

    )
}

export function LoginButton(){


    return(
        <button className="login font-dinCondensed text-brandWhite text-2xl justify-center hover:scale-110">
            Login
        </button>

    )
}

export default Header;
