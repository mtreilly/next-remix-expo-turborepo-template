import { render, screen } from "@testing-library/react";
import React from "react";

import Button from "./Button";

describe("tests", () => {
  it("should", () => {
    render(<Button label={"test"} />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
