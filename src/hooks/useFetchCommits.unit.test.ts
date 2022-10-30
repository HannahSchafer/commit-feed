import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useFetchCommits from "./useFetchCommits";
import { MOCK_COMMITS } from "../testUtils/mockData";
import { rest } from "msw";
import { setupServer } from "msw/node";

const response = rest.get(`https://api.github.com/repos/*`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(MOCK_COMMITS));
});
const handlers = [response];
const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useFetchCommits", () => {
  it("fetches data successfully", async () => {
    let pageNumber = 1;
    const user = "user";
    const repo = "repo";
    const setCommits = jest.fn();
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchCommits(pageNumber, user, repo, setCommits)
    );

    expect(result.current).toMatchObject({
      isLoading: true,
      hasError: false,
      hasNextPage: false,
    });

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.hasError).toBe(false);
    expect(result.current.hasNextPage).toBe(true);
    expect(setCommits).toHaveBeenCalledWith(MOCK_COMMITS);
  });
});
