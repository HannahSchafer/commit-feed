import { fireEvent, render, screen } from "@testing-library/react";
import Padded from "./Padded";
import { BrowserRouter } from "react-router-dom";

describe("renders Padded", () => {
  it("with `all` property", () => {
    render(
      <BrowserRouter>
        <Padded all={"4"}>test</Padded>
      </BrowserRouter>
    );
    const paddedItem = screen.getByLabelText("padded");
    expect(paddedItem).toHaveStyle("padding: 4px");
  });

  it("with `bottom` property", () => {
    render(
      <BrowserRouter>
        <Padded bottom={"4"}>test</Padded>
      </BrowserRouter>
    );
    const paddedItem = screen.getByLabelText("padded");
    expect(paddedItem).toHaveStyle("padding-bottom: 4px");
  });

  it("with `left` property", () => {
    render(
      <BrowserRouter>
        <Padded left={"4"}>test</Padded>
      </BrowserRouter>
    );
    const paddedItem = screen.getByLabelText("padded");
    expect(paddedItem).toHaveStyle("padding-left: 4px");
  });

  it("with `horizontal` property", () => {
    render(
      <BrowserRouter>
        <Padded horizontal={"4"}>test</Padded>
      </BrowserRouter>
    );
    const paddedItem = screen.getByLabelText("padded");
    expect(paddedItem).toHaveStyle("padding-left: 4px; padding-right: 4px");
  });

  it("with `right` property", () => {
    render(
      <BrowserRouter>
        <Padded right={"4"}>test</Padded>
      </BrowserRouter>
    );
    const paddedItem = screen.getByLabelText("padded");
    expect(paddedItem).toHaveStyle("padding-right: 4px");
  });

  it("with `top` property", () => {
    render(
      <BrowserRouter>
        <Padded top={"4"}>test</Padded>
      </BrowserRouter>
    );
    const paddedItem = screen.getByLabelText("padded");
    expect(paddedItem).toHaveStyle("padding-top: 4px");
  });

  it("with `vertical` property", () => {
    render(
      <BrowserRouter>
        <Padded vertical={"4"}>test</Padded>
      </BrowserRouter>
    );
    const paddedItem = screen.getByLabelText("padded");
    expect(paddedItem).toHaveStyle("padding-top: 4px; padding-bottom: 4px");
  });
});
