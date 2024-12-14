import React from "react";

import { CheckBoxProps } from "../../../types/FormProps";

export const FormCheckBox: React.FC<CheckBoxProps> = ({
  text,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={name} className="text-sm">
        {text}
      </label>
    </div>
  );
};
