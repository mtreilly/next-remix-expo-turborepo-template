import Button from "./Button";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("tests", () => {
  it("should", () => {
    render(<Button />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
