"use client";
import React, { useState } from "react";
import StyledInput from "./inputContainer";
import { auth } from "../lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { FormEvent } from "react";

const SignupUI = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error message
    setConfirmationMessage(""); // Reset confirmation message

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password length check
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const url =
        process.env.DEV === "0"
          ? "http://localhost:3000/api/postAccountInfo"
          : "https://sms-website-sigma.vercel.app/api/postAccountInfo";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_first_name: firstName,
          user_last_name: lastName,
          user_email: email,
          user_firebase_id: userCredential.user.uid,
        }),
      });
      // Send verification email
      sendEmailVerification(userCredential.user)
        .then(() => {
          // Verification email sent
          setConfirmationMessage(
            "A verification email has been sent. Please check your inbox."
          );
          window.location.href = "/login";
        })
        .catch((error) => {
          // Handle errors here
          setError("Failed to send verification email. Please try again.");
        });
    } catch (error: any) {
      // Handle sign-up errors here
      setError(error.message);
    }
  };

  console.log("First Name: ", firstName, "Last Name: ", lastName);

  return (
    <div className="flex justify-center items-center absoulte mt-36">
      <div className="auth-card flex flex-col items-center py-8 space-y-4 mt-8 ">
        <div className="font-dinCondensed text-brandWhite text-6xl bold p-2">
          Create Account
        </div>
        <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {confirmationMessage && (
          <p style={{ color: "green" }}>{confirmationMessage}</p>
        )}

        <form className="flex flex-col space-y-5 pt-2" onSubmit={onSubmit}>
          <div className="flex space-x-4 ">
            <StyledInput
              label="First Name:"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <StyledInput
              label="Last Name:"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <StyledInput
            label="Email:"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex space-x-4 pb-4">
            <StyledInput
              label="Password:"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledInput
              label="Confirm Password:"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="text-brandGrey font-dinAlternate">
            <text>Password must be:</text>
            <li>At least 8 characters long</li>
          </div>
          <button
            type="submit"
            className="submit-button bg-darkBlue text-white font-dinBold font-xl rounded-full p-3 hover:opacity-65 shadow-md text-lg"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupUI;
