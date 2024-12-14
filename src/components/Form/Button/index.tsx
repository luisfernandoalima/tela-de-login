import React from "react";

import { ButtonProps } from "../../../types/FormProps";

export const FormButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <>
      <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">{text}</button>
    </>
  );
};
