import { fireEvent, render, screen } from "@testing-library/react";
import Spaced from "./Spaced";
import { BrowserRouter } from "react-router-dom";

describe("renders Spaced", () => {
  it("with `all` property", () => {
    render(
      <BrowserRouter>
        <Spaced all={"4"}>test</Spaced>
      </BrowserRouter>
    );
    const spacedItem = screen.getByLabelText("spaced");
    expect(spacedItem).toHaveStyle("margin: 4px");
  });

  it("with `bottom` property", () => {
    render(
      <BrowserRouter>
        <Spaced bottom={"4"}>test</Spaced>
      </BrowserRouter>
    );
    const spacedItem = screen.getByLabelText("spaced");
    expect(spacedItem).toHaveStyle("margin-bottom: 4px");
  });

  it("with `left` property", () => {
    render(
      <BrowserRouter>
        <Spaced left={"4"}>test</Spaced>
      </BrowserRouter>
    );
    const spacedItem = screen.getByLabelText("spaced");
    expect(spacedItem).toHaveStyle("margin-left: 4px");
  });

  it("with `horizontal` property", () => {
    render(
      <BrowserRouter>
        <Spaced horizontal={"4"}>test</Spaced>
      </BrowserRouter>
    );
    const spacedItem = screen.getByLabelText("spaced");
    expect(spacedItem).toHaveStyle("margin-left: 4px; margin-right: 4px");
  });

  it("with `right` property", () => {
    render(
      <BrowserRouter>
        <Spaced right={"4"}>test</Spaced>
      </BrowserRouter>
    );
    const spacedItem = screen.getByLabelText("spaced");
    expect(spacedItem).toHaveStyle("margin-right: 4px");
  });

  it("with `top` property", () => {
    render(
      <BrowserRouter>
        <Spaced top={"4"}>test</Spaced>
      </BrowserRouter>
    );
    const spacedItem = screen.getByLabelText("spaced");
    expect(spacedItem).toHaveStyle("margin-top: 4px");
  });

  it("with `vertical` property", () => {
    render(
      <BrowserRouter>
        <Spaced vertical={"4"}>test</Spaced>
      </BrowserRouter>
    );
    const spacedItem = screen.getByLabelText("spaced");
    expect(spacedItem).toHaveStyle("margin-top: 4px; margin-bottom: 4px");
  });
});
