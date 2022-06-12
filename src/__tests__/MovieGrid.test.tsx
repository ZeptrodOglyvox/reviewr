import React from "react";
import { act, render, screen } from "@testing-library/react";
import MovieGrid from "../components/MovieGrid";
import "@testing-library/jest-dom";

test("empty list", async () => {
    render(<MovieGrid movies={[]} />);
    expect(await screen.findByTestId("empty-message-id")).toHaveTextContent(
        "Ok people, nothing to see here, move along...",
    );
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
