import React, { FunctionComponent, useState } from "react";
import MovieIcon, { type MovieIconProps } from "./MovieIcon";
import "../styles/MovieGrid.css";

interface OwnProps {
    movies: any[]; // FIXME: Update with the model type
}

type MovieGridProps = OwnProps;

const MovieGrid: FunctionComponent<MovieGridProps> = ({ movies }) => {
    const [query, setQuery] = useState("");

    const filteredMovieIcon = movies
        .filter((m: MovieIconProps) =>
            m.title.match(new RegExp(query.trim(), "i")),
        )
        .map(MovieIcon);

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
            <div className="movie-icon-grid">{filteredMovieIcon}</div>
        </>
    );
};

export default MovieGrid;
