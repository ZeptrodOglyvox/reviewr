import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import MovieIcon, { type MovieIconProps } from "./MovieIcon";
import movies from "../data/movies";
import "../styles/MovieGrid.css";

interface OwnProps {}

type Props = OwnProps;

const MovieGrid: FunctionComponent<Props> = () => {
    const [query, setQuery] = useState("");

    const filteredMovies = movies
        .filter((m) => m.title.match(new RegExp(query.trim(), "i")))
        .map((m) => (
            <MovieIcon image={m.image} imageAlt={m.imageAlt} title={m.title} />
        ));

    return (
        <>
            <div className="heading">
                <h2>Top Movies</h2>
                <form>
                    <label htmlFor="search">Search</label>
                    <input
                        id="search"
                        name="search"
                        type="text"
                        value={query}
                        onChange={(e) => {
                            e.preventDefault();
                            setQuery(e.target.value);
                        }}
                    />
                </form>
            </div>
            <div className="movie-icon-grid">{filteredMovies}</div>
        </>
    );
};

export default MovieGrid;
