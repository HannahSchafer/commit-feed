import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import { rest } from "msw";
import { setupServer } from "msw/node";

import CommitsList from "./CommitsList";
import { CommitsContextProvider } from "../../contexts/CommitsContext";
import { MOCK_COMMITS } from "../../testUtils/mockData";
import MockIntersectionObserver from "../../testUtils/mockIntersectionObserver";

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

describe("renders CommitList", () => {
  it("with loading state", async () => {
    const { getByText, getByLabelText, queryByLabelText } = render(
      <CommitsContextProvider>
        <BrowserRouter>
          <CommitsList />
        </BrowserRouter>
      </CommitsContextProvider>
    );
    // loading
    expect(queryByLabelText("skeleton-list-loader")).toBeInTheDocument();
  });

  it("with commits data", async () => {
    const { getByText, getByLabelText, queryByLabelText } = render(
      <CommitsContextProvider>
        <BrowserRouter>
          <CommitsList />
        </BrowserRouter>
      </CommitsContextProvider>
    );
    // renders commit data
    const authorInstances = await screen.findAllByText("Andrew Mains");
    expect(authorInstances.length).toBe(3);
    const commitItems = screen.getAllByLabelText("commit-item");
    // loading stopped
    expect(queryByLabelText("skeleton-list-loader")).toBeNull();
  });
});
