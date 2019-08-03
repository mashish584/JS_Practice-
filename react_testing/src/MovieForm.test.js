import React from "react";
import { render, fireEvent } from "react-testing-library";
import MovieForm from "./MovieForm";

const onSubmit = jest.fn();

test("<MovieForm/>", () => {
  const { getByText, getByLabelText } = render(<MovieForm submitForm={onSubmit} />);

  getByLabelText("Text").value = "hello";
  //   first way
  //   fireEvent.change(getByLabelText("Text"));
  // second way
  fireEvent.change(getByLabelText("Text"), {
    target: { value: "hello" }
  });

  fireEvent.click(getByText("Submit"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    text: "hello"
  });
});
