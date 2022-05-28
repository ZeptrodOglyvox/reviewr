import React, { FunctionComponent } from "react";
import MovieIcon, { type MovieIconProps } from "./MovieIcon";
import movies from "../data/movies";
import "../styles/MovieGrid.css";

interface OwnProps {}

type Props = OwnProps;

const MovieGrid: FunctionComponent<Props> = () => {
    const movieItem = (el: MovieIconProps) => (
        <MovieIcon image={el.image} imageAlt={el.imageAlt} title={el.title} />
    );

    return <div className="movie-icon-grid">{movies.map(movieItem)}</div>;
};

export default MovieGrid;
