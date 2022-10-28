import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";

describe("renders ListItem", () => {
  it("successfully", () => {
    render(<ListItem>Test List Item</ListItem>);
    const listItem = screen.getByLabelText("list-item");
    expect(listItem).toBeInTheDocument();
  });
});
