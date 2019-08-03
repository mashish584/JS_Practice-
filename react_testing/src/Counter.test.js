import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Counter from "./Counter";

afterEach(cleanup);

test("<Counter/>", () => {
  const { getByTestId } = render(<Counter />);
  const counterButton = getByTestId("counter-button");

  expect(counterButton.tagName).toBe("BUTTON");
  expect(counterButton.textContent).toBe("0");

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe("1");
});
