import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Commits from "./Commits";
import CustomRouter from "../testUtils/customRouter";
import { createMemoryHistory } from "history";

import { CommitsContextProvider } from "../contexts/Store";
import { MOCK_COMMITS } from "../testUtils/mockData";
import { rest } from "msw";
import { setupServer } from "msw/node";
const FAKE_USERNAME_WITH_REPOS = "test";
const FAKE_REPO = "test";
import MockIntersectionObserver from "../testUtils/mockIntersectionObserver";
import userEvent from "@testing-library/user-event";

const response = rest.get(`https://api.github.com/repos/*`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(MOCK_COMMITS));
});

const handlers = [response];
const server = setupServer(...handlers);

beforeAll(() => {
  window.IntersectionObserver = MockIntersectionObserver;
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("renders Commits route", () => {
  it("with commit data", async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    const { getByText, getByLabelText, queryByLabelText } = render(
      <CommitsContextProvider>
        <CustomRouter history={history}>
          <Commits />
        </CustomRouter>
      </CommitsContextProvider>
    );

    // renders commits route
    const pageHeader = screen.getByLabelText(
      "List of commits from selected repository"
    );
    expect(pageHeader).toBeInTheDocument();

    // loading
    expect(queryByLabelText("skeleton-list-loader")).toBeInTheDocument();
    // renders commit data
    const author = await screen.findAllByText("Andrew Mains");
    expect(author.length).toBe(3);
    // loading stopped
    expect(queryByLabelText("skeleton-list-loader")).toBeNull();

    // navigate to home
    await userEvent.click(getByText("New Search"));
    act(() => {
      expect(history.location.pathname).toBe("/");
    });
  });
});
