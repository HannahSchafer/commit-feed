import { render, screen } from "@testing-library/react";
import SkeletonLoader from "./SkeletonLoader";

test("renders SkeletonLoader", () => {
  render(<SkeletonLoader />);
  const listItem = screen.getByLabelText("skeleton-loader");
  expect(listItem).toBeInTheDocument();
});
