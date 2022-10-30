import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

import CustomRouter from "../testUtils/customRouter";
import Home from "./Home";
import MockIntersectionObserver from "../testUtils/mockIntersectionObserver";
import { FAKE_REPO_OWNER, FAKE_REPO } from "./../testUtils/constants";

describe("renders Home route", () => {
  beforeAll(() => {
    window.IntersectionObserver = MockIntersectionObserver;
  });
  it("with commit data", async () => {
    const history = createMemoryHistory();

    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <CustomRouter history={history}>
        <Home />
      </CustomRouter>
    );
    const page = screen.getByLabelText(
      "Page to input Github user and repository name"
    );
    expect(page).toBeInTheDocument();
    userEvent.type(getByPlaceholderText("Ex: m3db"), FAKE_REPO_OWNER);
    expect(getByLabelText("github-user-input")).toHaveAttribute(
      "value",
      FAKE_REPO_OWNER
    );
    userEvent.type(getByPlaceholderText("Ex: m3"), FAKE_REPO);
    expect(getByLabelText("repository-input")).toHaveAttribute(
      "value",
      FAKE_REPO
    );

    await userEvent.click(getByText("Submit"));

    act(() => {
      expect(history.location.pathname).toBe(
        `/${FAKE_REPO_OWNER}/${FAKE_REPO}`
      );
    });
  });
});
