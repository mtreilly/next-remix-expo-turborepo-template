import React from "react";

interface ButtonProps {
  label: string;
  classNames?: string;
}

const Button = ({ label, classNames }: ButtonProps) => {
  return (
    <button type="button" className="px-3 py-1 bg-green-400 rounded-lg">
      {label}
    </button>
  );
};

export default Button;
