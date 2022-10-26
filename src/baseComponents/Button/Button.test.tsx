import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button", () => {
  render(<Button onClick={() => null}>Test Child</Button>);
  const button = screen.getByLabelText("button");
  expect(button).toBeInTheDocument();
});
