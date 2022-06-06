import { render, screen } from "@testing-library/react";
import React from "react";

import Label from "./Label";

describe("tests", () => {
  it("should", () => {
    render(<Label label={"test"} />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
