import { getAllByLabelText, render, screen } from "@testing-library/react";
import SkeletonListLoader from "./SkeletonListLoader";

describe("renders SkeletonListLoader", () => {
  it("successfully", () => {
    const { baseElement } = render(<SkeletonListLoader numRows={2} />);
    const listItems = getAllByLabelText(baseElement, "list-item");
    expect(listItems.length).toBe(2);
    const skeletonLoaders = getAllByLabelText(baseElement, "skeleton-loader");
    expect(skeletonLoaders.length).toBe(2);
  });
});
