import { render, screen } from "@testing-library/react";
import CommitItem from "./CommitItem";
import { MOCK_COMMITS } from "../../testUtils/mockData";

describe("renders CommitItem", () => {
  it("successfully", () => {
    render(<CommitItem commitItem={MOCK_COMMITS[0]} />);
    const commitItem = screen.getByLabelText("commit-item");
    expect(commitItem).toBeInTheDocument();
    expect(screen.getByText("Vytenis Darulis")).toBeInTheDocument();
    expect(screen.getByText("October 13, 2022 9:01 AM")).toBeInTheDocument();
  });
});
