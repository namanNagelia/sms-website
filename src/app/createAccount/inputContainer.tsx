// StyledInput.tsx
import React from "react";

type StyledInputProps = {
  label?: string; // The label is optional
  type?: "text" | "password" | "number" | "tel";
} & React.InputHTMLAttributes<HTMLInputElement>; // Includes all standard input attributes

const StyledInput: React.FC<StyledInputProps> = ({ label, type, ...props }) => {
  return (
    <div className="flex flex-col grow justify">
      {label && (
        <label
          className="text-brandGrey text-lg mb-1 font-dinAlternate ml-4 tracking-wider num"
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className="
          outline-none 
          border-none 
          rounded-full 
          text-xl 
          tracking-wide
          
          bg-inputBlue 
          text-white
          
          font-dinAlternate 
          
          w-full 
          p-2 
          px-4
          self-end
          "
        {...props}
      />
    </div>
  );
};

export default StyledInput;
