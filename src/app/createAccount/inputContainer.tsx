// StyledInput.tsx
import React from "react";

type StyledInputProps = {
  label?: string; // The label is optional
  type?: string; // number/text/other input type
} & React.InputHTMLAttributes<HTMLInputElement>; // Includes all standard input attributes

export const StyledInput: React.FC<StyledInputProps> = ({ label, type, ...props }) => {
  if(type){
    type = "text"
  }
  return (
    <div className="flex flex-col grow justify">
      {label && (
        <label
          className="text-brandGrey text-lg mb-1 font-dinAlternate ml-4 tracking-wider"
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

type StyledDropDownProps = {
  label?: string; // The label is optional
  type?: string; // number/text/other input type
  children : React.ReactNode
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const StyledDropDown: React.FC<StyledDropDownProps> = ({ label, children,  ...props }) => {
  return (
    <div className="flex flex-col grow justify">
      {label && (
        <label
          className="text-brandGrey text-lg mb-1 font-dinAlternate ml-4 tracking-wider"
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <select
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
      >
        {children}
      </select>
    </div>
  );
};
