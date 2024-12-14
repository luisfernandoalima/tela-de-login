import React from "react";

import { InputProps } from "../../../types/FormProps";

export const FormInput: React.FC<InputProps> = ({
  text,
  name,
  type,
  placeholder,
  value,
  onChange
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm">
        {text}
      </label>
      <input
        className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
