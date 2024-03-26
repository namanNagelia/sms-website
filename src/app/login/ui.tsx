"use client";
import React, { useState } from "react";
import StyledInput from "../createAccount/inputContainer";
import { auth } from "../lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from "react";
const LoginUI = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error message
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (!user.emailVerified) {
          // Email is not verified
          setError(
            "Your email address has not been verified. Please check your inbox for the verification email."
          );
          // Optionally, offer to resend the verification email or redirect them to a verification notice page
        } else {
          // Email is verified, redirect to home
          window.location.href = "/home";
          console.log(user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        console.log(errorMessage);
        setError(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="auth-card flex flex-col items-center py-8 space-y-3 mt-8">
        <div className="font-dinCondensed text-brandWhite text-5xl bold">
          Log In
        </div>
        <div className="h-1 bg-brandGrey w-3/4 rounded-md" />
        {error && (
          <p
            style={{ color: "red", textAlign: "center" }}
            className="font-dinCondensed text-lg"
          >
            {error}
          </p>
        )}

        <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
          <StyledInput
            label="Email:"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex space-x-4">
            <StyledInput
              label="Password:"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="submit-button bg-darkBlue text-white font-dinBold font-xl rounded-full p-3 hover:opacity-65"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginUI;
