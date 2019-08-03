import React from "react";
import { MemoryRouter } from "react-router";
import { render, cleanup } from "react-testing-library";
import Movie, { POSTER_PATH } from "./Movie";

// clearup
afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test("<Movie/>", () => {
  render(<Movie />);
  expect(console.error).toHaveBeenCalled();
});

const movie = {
  title: "Mighty Ducks",
  poster_path: "mighty_ducks_cover.jpg",
  id: "001"
};

test("<Movie/> with data", () => {
  const { debug, getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  expect(console.error).not.toBeCalled();
  expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
  expect(getByTestId("movie-image").src).toBe(`${POSTER_PATH}${movie.poster_path}`);
});
