import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import CustomRouter from "../testUtils/customRouter";

import NotFound from "./NotFound";
import MockIntersectionObserver from "../testUtils/mockIntersectionObserver";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

describe("renders NotFound route", () => {
  beforeAll(() => {
    window.IntersectionObserver = MockIntersectionObserver;
  });
  it("renders", async () => {
    const history = createMemoryHistory();
    const { getByText, getByLabelText } = render(
      <CustomRouter history={history}>
        <NotFound />
      </CustomRouter>
    );
    const notFoundPage = screen.getByLabelText("User or Repository not found");
    expect(notFoundPage).toBeInTheDocument();

    await userEvent.click(getByText("Home"));

    act(() => {
      expect(history.location.pathname).toBe("/");
    });
  });
});
