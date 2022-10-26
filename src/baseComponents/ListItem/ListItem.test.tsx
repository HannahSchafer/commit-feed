import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";

test("renders ListItem", () => {
  render(<ListItem>Test List Item</ListItem>);
  const listItem = screen.getByLabelText("list-item");
  expect(listItem).toBeInTheDocument();
});
