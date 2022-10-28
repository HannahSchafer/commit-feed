import { render, screen } from "@testing-library/react";
import SkeletonLoader from "./SkeletonLoader";

describe("renders SkeletonLoader", () => {
  it("successfully", () => {
    render(<SkeletonLoader />);
    const listItem = screen.getByLabelText("skeleton-loader");
    expect(listItem).toBeInTheDocument();
  });
});
