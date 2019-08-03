import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, waitForElement, cleanup } from "react-testing-library";
import MoviesList from "./MoviesList";

//global fetch
global.fetch = require("jest-fetch-mock");

console.error = jest.fn();

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const movies = {
  results: [
    {
      id: "1",
      title: "ABC",
      poster_path: "abc.jpg",
      backdrop_path: "bg-abc.jpg"
    },
    {
      id: "2",
      title: "XYZ",
      poster_path: "poster-xyz.jpg",
      backdrop_path: "bg-xyz.jpg"
    },
    {
      id: "3",
      title: "WBC",
      poster_path: "wbc.jpg",
      backdrop_path: "bg-wbc.jpg"
    }
  ]
};

test("<MovieList/>", async () => {
  fetch.mockResponseOnce(JSON.stringify({ results: movies.results }));
  const { debug, getByTestId, queryByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );

  expect(getByTestId("loadingState")).toBeTruthy();
  await waitForElement(() => getByTestId("movie-link"));
  expect(queryByTestId("loadingState")).toBeFalsy();
  expect(getAllByTestId("movie-link").length).toBe(movies.results.length);
  debug();
});
