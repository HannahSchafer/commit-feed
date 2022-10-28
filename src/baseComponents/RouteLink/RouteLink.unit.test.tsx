import { fireEvent, render, screen } from "@testing-library/react";
import RouteLink from "./RouteLink";
import { BrowserRouter } from "react-router-dom";

describe("renders button", () => {
  it("successfully", () => {
    render(
      <BrowserRouter>
        <RouteLink to={"/"}>Test Child</RouteLink>
      </BrowserRouter>
    );
    const link = screen.getByLabelText("route-link");
    expect(link).toBeInTheDocument();
    fireEvent.click(link);
    expect(window.location.pathname).toBe("/");
  });
});
