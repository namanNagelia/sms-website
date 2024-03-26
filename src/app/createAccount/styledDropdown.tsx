// StyledInput.tsx
import React from "react";
type StyledDropDownProps = {
  label?: string; // The label is optional
  type?: string; // number/text/other input type
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const StyledDropDown: React.FC<StyledDropDownProps> = ({
  label,
  children,
  ...props
}) => {
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

export default StyledDropDown;
