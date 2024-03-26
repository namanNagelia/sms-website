"use client"
import React from "react";
import { StyledDropDown, StyledInput } from "../createAccount/inputContainer";
import { useState } from "react";
import { FormEvent } from "react";
import { V } from "@vidstack/react/dist/types/vidstack-framework.js";

const CompleteProfilePage = () => {
  const [page, setPage] = useState<number>(1);
  const [step, setStep] = useState<number>(0);

  const userRoles = [
    "Athlete", 
    "Guardian", 
    "Coach", 
    "Scout", 
    "Event Operator", 
    "Fan"
  ]

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step == 0) {
      console.log(page);
      setStep(step + 1);
    }
  }

  return (
    <div className="flex justify-center items-center absoulte mt-36">
      <div className="auth-card flex flex-col items-center py-8 space-y-4 mt-8 ">
        <div className="font-dinCondensed text-brandWhite text-6xl bold p-2">
          Finish Profile
        </div>
        <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
        <div className=" text-brandWhite text-2xl italic">
          {(step == 0 ? "Lets Get to Know You!" : `Welcome ${userRoles[page-1]}!`)}
        </div>
        <form className="w-full px-24 flex flex-col items-center space-y-4"
          onSubmit={onSubmit}
        >
          {(
            step == 0 ?
              <>
                <StyledDropDown onChange={(e) => {
                  setPage(parseInt(e.target.value))
                }}>
                  <option value={1}>Athlete</option>
                  <option value={2}>Guardian</option>
                  <option value={3}>Coach</option>
                  <option value={4}>Scout</option>
                  <option value={5}>Event Operator</option>
                  <option value={6}>Fan</option>
                </StyledDropDown>
                <button
                  type="submit"
                  className="submit-button bg-darkBlue text-white font-dinBold font-xl rounded-full p-3 px-6 hover:opacity-65 shadow-md text-lg w-fit"

                >
                  Next Step
                </button>
              </> : <AccountDetails type={page} />
          )}
        </form>
      </div>
    </div>
  );
};

export default CompleteProfilePage;

interface DetailsProps {
  type: number
}
const AccountDetails: React.FC<DetailsProps> = ({ type }) => {
  const defaultTeams = [
    { teamName: "team1" },
    { teamName: "team2" },
    { teamName: "team3" },
  ]
  const defaultPositions = [
    "Guard", "Forward"
  ]

  const defaultPlayer = [
    {
      id: 1,
      firstName: "Dequan"
    },
    {
      id: 2,
      firstName: "Dequan 2"
    },
  ]
  // This is going to give me a brain hemorrage to code
  return (
    <>
      {(
        type == 1 ?
          <>
            <StyledDropDown label="Which Team do you play for?">

              {defaultTeams.map((team, index) => {
                return <option key={index}>{team.teamName}</option>
              })}

            </StyledDropDown>

            <div className="flex flex-row space-x-4">
              <StyledInput label="Jersey No." placeholder="Ex. 0, 1, 60" />
              <StyledInput label="Height" placeholder={"Ex. 6'0\""} />
              <StyledInput label="Weight" placeholder="Ex. 175lbs " />
            </div>

            <div className="flex flex-row space-x-4">
              <StyledDropDown label="Position" >
                {defaultPositions.map((position, index) => {
                  return <option key={index}> {position} </option>
                })}
              </StyledDropDown>
              <div className="flex flex-row w-2/3 space-x-4">
                <StyledInput label="Year of Grad." placeholder="Ex. 2027" />
                <StyledInput label="GPA" placeholder="Ex. 3.9" />
              </div>
            </div>

          </> : 
        (type == 2 ? 
          <>
            {/* Phone number */}
            <StyledInput label="Phone Number" />
              
            <StyledDropDown label="Who is your student athlete?">
              {defaultPlayer.map((player, index) => {
                return <option key={index}>{player.firstName}</option>
              })}
            </StyledDropDown>

          </> :
          <></>
            )
      )}
      <button
        type="submit"
        className="submit-button bg-darkBlue text-white font-dinBold font-xl rounded-full p-3 px-6 hover:opacity-65 shadow-md text-lg w-fit"
      >
        Finalize Acccount
      </button>
    </>
  )
}