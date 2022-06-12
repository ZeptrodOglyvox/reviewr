import "@testing-library/jest-dom";
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";

import MovieGrid from "../components/MovieGrid";

test("empty list", async () => {
    const { asFragment } = render(<MovieGrid movies={[]} />);

    await act(async () => {
        expect(await asFragment()).toMatchSnapshot();
    });
});

test("happy path", async () => {
    const { asFragment } = render(
        <MovieGrid
            movies={[
                {
                    _id: "1",
                    title: "movie 1",
                    image: "http://img.com",
                },
                {
                    _id: "2",
                    title: "movie 2",
                    image: "http://img.com",
                },
            ]}
        />,
    );

    await act(async () => {
        expect(await asFragment()).toMatchSnapshot();
    });
});

test("should update search", async () => {
    render(<MovieGrid movies={[]} />);
    const searchElem = screen.getByTestId("search-id");
    fireEvent.change(searchElem, {
        target: { value: "movie 1" },
    });
    expect(searchElem).toHaveValue("movie 1");
});
