import "../../assets/css/style.css";

import React from "react";

interface ButtonProps {
  label: string;
  classNames?: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button type="button" className="px-3 py-1 bg-yellow-400 rounded-lg">
      {label}
    </button>
  );
};

export default Button;
