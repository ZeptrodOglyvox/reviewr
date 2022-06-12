import React, { FunctionComponent, useState } from "react";

import MovieIcon, { type MovieIconProps } from "./MovieIcon";
import "../styles/MovieGrid.css";

interface OwnProps {
    movies: any[]; // FIXME: Update with the model type
}

type MovieGridProps = OwnProps;

const MovieGrid: FunctionComponent<MovieGridProps> = ({ movies }) => {
    const [query, setQuery] = useState("");

    const movieIconGrid = (
        <div className="movie-icon-grid" data-testid="movie-icon-grid">
            {movies
                .filter((m: MovieIconProps) =>
                    m.title.match(new RegExp(query.trim(), "i")),
                )
                .map(MovieIcon)}
        </div>
    );

    const emptyMessage = (
        <div className="error" data-testid="empty-message-id" style={{}}>
            "Ok people, nothing to see here, move along..."
        </div>
    );

    return (
        <>
            <div className="heading">
                <h2>Top Movies ({movies?.length})</h2>
                <form>
                    <label htmlFor="search">Search</label>
                    <input
                        id="search"
                        data-testid="search-id"
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
            {movies?.length ? movieIconGrid : emptyMessage}
        </>
    );
};

export default MovieGrid;
