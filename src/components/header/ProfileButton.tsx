"use client";
import React, { useState } from "react";
import { useUser } from "@/app/userContext";

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
    // Implement the sign-out functionality here
    console.log("Sign out clicked");
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
          <button className="dropdown-item" onClick={profileClick}>
            Profile
          </button>
          <button className="dropdown-item" onClick={signOutClick}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
