"use client";
import React, { useState } from "react";
import { useUser } from "@/app/userContext";
import "./profile.css";
import { auth } from "@/app/lib/firebaseConfig";
import { signOut } from "firebase/auth";

export function ProfileButton() {
  const [isHovering, setIsHovering] = useState(false);
  const { user } = useUser();
  console.log("User form Profile button");
  console.log(user);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const profileClick = () => {
    window.location.href = "/profile";
  };

  const signOutClick = () => {
    signOut(auth).then(() => {
      window.location.href = "/";
      console.log(user);
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="login font-dinCondensed text-brandWhite text-2xl justify-center hover:scale-110">
        Profile
      </button>
      {isHovering && (
        <div className="dropdown-menu">
          <button
            className="dropdown-item font-dinAlternate"
            onClick={profileClick}
          >
            Profile
          </button>
          <button
            className="dropdown-item font-dinAlternate"
            onClick={signOutClick}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
