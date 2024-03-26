// StyledInput.tsx
import React from "react";

type StyledInputProps = {
  label?: string; // The label is optional
} & React.InputHTMLAttributes<HTMLInputElement>; // Includes all standard input attributes

const StyledInput: React.FC<StyledInputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className="text-brandGrey text-lg mb-1 font-dinAlternate"
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <input
        className="outline-none border-none rounded-full py-1 px-2 text-sm bg-inputBlue text-white font-dinAlternate w-full"
        {...props}
      />
    </div>
  );
};

export default StyledInput;
