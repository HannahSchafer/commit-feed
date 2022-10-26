import { getAllByLabelText, render, screen } from "@testing-library/react";
import SkeletonListLoader from "./SkeletonListLoader";

test("renders SkeletonListLoader", () => {
  const { baseElement } = render(<SkeletonListLoader numRows={2} />);
  const listItems = getAllByLabelText(baseElement, "list-item");
  expect(listItems.length).toBe(2);
});
