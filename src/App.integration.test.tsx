import React, {
  render,
  screen,
  getByLabelText,
  getByPlaceholderText,
  queryByLabelText,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

import { MOCK_COMMITS } from "./testUtils/mockData";
const FAKE_OWNER = "m3db";
const FAKE_REPO = "m3";
import MockIntersectionObserver from "./testUtils/mockIntersectionObserver";
import App from "./App";

describe("App", () => {
  const response = rest.get(
    `https://api.github.com/repos/*`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(MOCK_COMMITS));
    }
  );
  const handlers = [response];
  const server = setupServer(...handlers);
  describe("successful paths", () => {
    beforeAll(() => {
      window.IntersectionObserver = MockIntersectionObserver;

      server.listen();
    });
    afterEach(() => {
      server.resetHandlers();
    });
    afterAll(() => {
      server.close();
    });

    it("navigate between Home and Commits routes", async () => {
      const {
        getByText,
        getByLabelText,
        getByPlaceholderText,
        queryByLabelText,
      } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const homePage = screen.getByLabelText(
        "Page to input Github user and repository name"
      );
      expect(homePage).toBeInTheDocument();
      userEvent.type(getByPlaceholderText("Ex: m3db"), FAKE_OWNER);
      expect(getByLabelText("github-user-input")).toHaveAttribute(
        "value",
        FAKE_OWNER
      );
      userEvent.type(getByPlaceholderText("Ex: m3"), FAKE_REPO);
      expect(getByLabelText("repository-input")).toHaveAttribute(
        "value",
        FAKE_REPO
      );
      await userEvent.click(getByText("Submit"));
      expect(
        getByLabelText("List of commits from selected repository")
      ).toBeInTheDocument();
      expect(getByLabelText("skeleton-list-loader")).toBeInTheDocument();

      const author = await screen.findAllByText("Andrew Mains");
      expect(author.length).toBe(3);

      expect(queryByLabelText("skeleton-list-loader")).toBeNull();

      await userEvent.click(getByText("New Search"));
      const homePageReturned = screen.getByLabelText(
        "Page to input Github user and repository name"
      );
      expect(homePageReturned).toBeInTheDocument();
    });
  });

  describe("unsuccessful paths", () => {
    beforeAll(() => {
      window.IntersectionObserver = MockIntersectionObserver;
      server.listen();
    });
    afterEach(() => {
      server.resetHandlers();
    });
    afterAll(() => {
      server.close();
    });

    it("redirect to NotFound on fetch error", async () => {
      const history = createMemoryHistory();
      const {
        getByText,
        getByLabelText,
        getByPlaceholderText,
        queryByLabelText,
      } = render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const homePage = screen.getByLabelText(
        "Page to input Github user and repository name"
      );
      expect(homePage).toBeInTheDocument();
      userEvent.type(getByPlaceholderText("Ex: m3db"), "notAnOwner");
      expect(getByLabelText("github-user-input")).toHaveAttribute(
        "value",
        "notAnOwner"
      );
      userEvent.type(getByPlaceholderText("Ex: m3"), "notARepository");
      expect(getByLabelText("repository-input")).toHaveAttribute(
        "value",
        "notARepository"
      );
      await userEvent.click(getByText("Submit"));

      expect(getByLabelText("skeleton-list-loader")).toBeInTheDocument();

      await waitFor(() => {
        expect(
          getByLabelText("User or Repository not found")
        ).toBeInTheDocument();
      });
    });
  });
});
