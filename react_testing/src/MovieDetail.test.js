import React from "react";
import { render, waitForElement } from "react-testing-library";
import MovieDetail, { BACKDROP_PATH, POSTER_PATH } from "./MovieDetail";

global.fetch = require("jest-fetch-mock");

console.error = jest.fn();

const match = {
  params: {
    id: "hi"
  }
};

const movie = {
  id: "hi",
  title: "ABC",
  poster_path: "abc.jpg",
  backdrop_path: "xyz.jpg"
};

test("<MovieDetail>", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      id: "hi",
      title: "ABC",
      poster_path: "abc.jpg",
      backdrop_path: "xyz.jpg"
    })
  );
  const { getByTestId } = render(<MovieDetail match={match} />);
  await waitForElement(() => getByTestId("movie-title"));
  expect(getByTestId("movie-title").textContent).toBe(movie.title);
  expect(getByTestId("movie-image").getAttribute("src")).toBe(`${POSTER_PATH}${movie.poster_path}`);
});
