import { screen, render } from "@testing-library/react";
import React from "react";

import PreviewA4 from "./PreviewA4";

describe("PreviewA4", () => {
  const props: any = {
    format: true,
    allowOverflow: true,
    print: true,
    children: <h1>Contenu</h1>,
  };

  it("should render successfully", async () => {
    render(<PreviewA4 {...props} />);

    const div = screen.getByTestId("print");

    expect(div.innerHTML).toContain("Contenu");
  });

  it("should render with the print prop", () => {
    render(<PreviewA4 {...props} />);

    expect(screen.getByTestId("print")).toBeTruthy();
  });

  it("should render with allowOverflow", () => {
    render(<PreviewA4 {...props} />);

    const div = screen.getByTestId("print");

    const style = window.getComputedStyle(div);

    expect(style.overflow).toBe("visible");
  });
});
