"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FormEvent } from "react";
import { V } from "@vidstack/react/dist/types/vidstack-framework.js";
import StyledDropDown from "../createAccount/styledDropdown";
import StyledInput from "../createAccount/inputContainer";
import { useUser } from "../userContext";
import Background from "@/components/background";
interface Props {
  schoolOptions: {
    school: any;
  };
  players: {
    firstPlayer: any;
  };
}

interface ResponseType {
  user_height?: number;
  user_weight?: number;
  user_position?: string;
  user_year_of_graduation?: number;
  user_gpa?: number;
  user_jersey_no?: number;
  user_school?: string;
  user_firebase_id: string;
  user_user_type_id?: number; // Add this line
  user_phone_number?: string;
  user_student_name?: string;
}

const CompleteProfilePageUI = (props: Props) => {
  const schools = props.schoolOptions.school;
  const [page, setPage] = useState<number>(1);
  const [step, setStep] = useState<number>(0);
  const { user } = useUser();
  console.log(user);

  const [response, setResponse] = useState<ResponseType>({
    user_height: 5.1,
    user_weight: 175,
    user_position: "",
    user_year_of_graduation: 2024,
    user_gpa: 3.9,
    user_jersey_no: 6,
    user_school: "",
    user_firebase_id: user?.uid || "",
    user_user_type_id: 1,
    user_phone_number: "000-000-0000",
    user_student_name: "",
  });
  console.log(response);
  const url =
    process.env.DEV === "1"
      ? "https://sms-website-sigma.vercel.app/api/updateAccountInfo"
      : "http://localhost:3000/api/updateAccountInfo";

  const handleFinalizeAccount = async () => {
    const res = await fetch(
     url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
        // body: JSON.stringify({
        //   user_firebase_id: user?.uid, // Include the user_firebase_id in the request body
        //   user_user_type_id: response.user_user_type_id,
        //   user_year_of_graduation: response.user_year_of_graduation,
        //   user_height: response.user_height,
        //   user_weight: response.user_weight,
        //   user_position: response.user_position,
        //   user_jersey_no: response.user_jersey_no,
        //   user_gpa: response.user_gpa,
        // }),
      }
    );
    if (res.ok) {
      // Handle success response
      console.log("Success:");
    } else {
      // Handle error response
      console.error("Error:");
    }
  };

  useEffect(() => {
    console.log("ID", user?.uid);
    handleChangeResponse("user_firebase_id", user?.uid || "");
  }, [user]); // Depend on the user state to re-run this effect

  const userRoles = [
    "Athlete",
    "Guardian",
    "Coach",
    "Scout",
    "Event Operator",
    "Fan",
  ];
  const summary = [
    "Boost your game and scouting prospects by filling in the details below!",
    "Welcome",
    "Welcome",
    "Welcome",
    "Welcome",
    "Welcome",
  ];

  const handleChangeResponse = (field: string, newValue: number | string) => {
    setResponse((prevResp) => ({
      ...prevResp,
      [field]: newValue,
    }));
    console.log(newValue);
  };
  const [success, setSuccess] = useState(false);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await handleFinalizeAccount();
    setSuccess(true);

    if (step == 0) {
      console.log(page);
      setStep(step + 1);
    }
  };

  return (
    <div className="flex justify-center items-center absoulte mt-36">
      <div className="auth-card flex flex-col items-center py-8 space-y-4 mt-8 ">
        <div className="font-dinCondensed text-brandWhite text-6xl bold p-2">
          Finish Profile
        </div>
        <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
        <div className=" text-brandWhite text-2xl italic">
          {step == 0 ? "Lets Get to Know You!" : summary[page - 1]}
        </div>
        <form
          className="w-full px-14 flex flex-col items-center space-y-4"
          onSubmit={onSubmit}
        >
          {step == 0 ? (
            <>
              <StyledDropDown
                onChange={(e) => {
                  const userType = parseInt(e.target.value);

                  setPage(userType);
                  handleChangeResponse("user_user_type_id", userType); // Update the response state
                }}
              >
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
            </>
          ) : (
            <AccountDetails
              type={page}
              schools={schools}
              response={response}
              changeResp={handleChangeResponse}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default CompleteProfilePageUI;

interface DetailsProps {
  type: number;
  schools: any[];
  response?: ResponseType;
  changeResp: (field: string, newValue: number | string) => void;
}
const AccountDetails: React.FC<DetailsProps> = ({
  type,
  schools,
  response,
  changeResp,
}) => {
  const defaultTeams = [
    { teamName: "team1" },
    { teamName: "team2" },
    { teamName: "team3" },
  ];
  const positions = [
    "Point Guard",
    "Shooting Guard",
    "Small Forward",
    "Power Forward",
    "Center",
  ];
  const defaultPlayer = [
    {
      id: 1,
      firstName: "Dequan",
    },
    {
      id: 2,
      firstName: "Dequan 2",
    },
  ];

  const [query, setQuery] = useState("");

  // This is going to give me a brain hemorrage to code
  const schoolOptions = schools.map((school) => {
    if (
      (school.org_name as string).toLowerCase().includes(query.toLowerCase())
    ) {
      return { name: school.org_name, value: school.org_name };
    }
  });

  return (
    <>
      {type == 1 ? (
        <>
          <SearchSelect 
            options={schoolOptions} 
            resp={response} 
            changeResp={changeResp} 
            query={query}
            setQuery={setQuery}
            label={["Searching for School...", "Selected School:"]}
          />

          <div className="flex flex-row space-x-4">
            <StyledInput
              label="Jersey No."
              placeholder="Ex. 0, 1, 60"
              value={response?.user_jersey_no}
              onChange={(e) => {
                const jerseyNo = parseInt(e.target.value);

                changeResp("user_jersey_no", e.target.value);
              }}
              type="number"
            />

            <StyledInput
              label="Height"
              placeholder={"Ex. 6'0\""}
              value={response?.user_height}
              onChange={(e) => {
                const height = parseFloat(e.target.value);

                changeResp("user_height", height);
              }}
              type="number"
            />

            <StyledInput
              label="Weight"
              placeholder="Ex. 175lbs"
              value={response?.user_weight}
              onChange={(e) => {
                const weight = parseFloat(e.target.value);

                changeResp("user_weight", weight);
              }}
              type="number"
            />
          </div>

          <div className="flex flex-row space-x-4">
            <StyledDropDown
              label="Position"
              value={response?.user_position}
              onChange={(e) =>
                changeResp("user_position", e.currentTarget.value)
              }
            >
              {positions.map((position, index) => {
                return <option key={index}> {position} </option>;
              })}
            </StyledDropDown>
            <div className="flex flex-row w-2/3 space-x-4">
              <StyledInput
                label="Year of Grad."
                placeholder="Ex. 2027"
                value={response?.user_year_of_graduation}
                onChange={(e) => {
                  const year = parseInt(e.target.value);

                  changeResp("user_year_of_graduation", year);
                }}
                type="number"
              />

              <StyledInput
                label="GPA"
                placeholder="Ex. 3.9"
                value={response?.user_gpa}
                onChange={(e) => changeResp("user_gpa", e.target.value)}
                type="number"
              />
            </div>
          </div>
        </>
      ) : type == 2 ? (
        <>
          {/* Phone number */}
          <StyledInput
            label="Phone Number"
            type="tel"
            value={response?.user_phone_number}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="000-000-0000"
            onChange={(e) => {
              changeResp("user_phone_number", e.target.value);
            }}
          />

          <StyledDropDown
            label="Who is your student athlete?"
            value={response?.user_student_name}
            onChange={(e) => {
              changeResp("user_student_name", e.currentTarget.value);
            }}
          >
            {defaultPlayer.map((player, index) => {
              return <option key={index}>{player.firstName}</option>;
            })}
          </StyledDropDown>
        </>
      ) : type == 3 ? (
        <>
          <SearchSelect 
            options={schoolOptions} 
            resp={response} 
            changeResp={changeResp} 
            query={query}
            setQuery={setQuery}
            label={["Searching for Team...", "Selected Team:"]}
          />
        </>
      ) : (
        <></>
      )}
      <button
        type="submit"
        className="submit-button bg-darkBlue text-white font-dinBold font-xl rounded-full p-3 px-6 hover:opacity-65 shadow-md text-lg w-fit"
      >
        Finalize Acccount
      </button>
    </>
  );
};

interface SelectSearchProps {
  options: any[];
  resp?: ResponseType;
  changeResp: (field: string, newValue: number | string) => void;
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>
  label: [string, string]
  
}

const SearchSelect : React.FC<SelectSearchProps> = ({options, resp, changeResp, query, setQuery, label}) => {

  return (
    <div className="flex flex-row space-x-4">
            <div className="h-30 overflow-y-clip w-2/3">
              <div className="relative">
                <StyledInput
                  label={label[0]}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
                <div className="flex flex-col items-center bg-[#b0f9f433] w-full max-h-[4.5rem] z-10 overflow-hidden">
                  {options.map((option, index) => {
                    return option ? (
                      <button
                        onClick={(e) => {
                          changeResp("user_school", option?.value);
                          setQuery(option?.value);
                        }}
                        value={option?.value}
                        className="h-6 w-full text-white"
                      >
                        {option?.value}
                      </button>
                    ) : (
                      <></>
                    );
                  })}
                </div>
              </div>
            </div>
            <text className="text-white self-start pt-10 text-xl"> : </text>

            <StyledDropDown
              label={label[1]}
              disabled
              value={resp?.user_school}
              onChange={(e) => {
                changeResp("user_school", e.currentTarget.value);
              }}
            >
              {options.map((option, index) => {
                return <option key={index}>{option?.value}</option>;
              })}
            </StyledDropDown>
          </div>
        
  );
};
