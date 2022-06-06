import React from "react";

interface LabelProps {
  label: string;
}

const Label = ({ label }: LabelProps) => {
  return <div>{label}</div>;
};

export default Label;
