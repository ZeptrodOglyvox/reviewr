import React, { FunctionComponent } from "react";
import "../styles/MovieIcon.css";

interface OwnProps {
    image: string;
    imageAlt: string;
    title: string;
}

export type MovieIconProps = OwnProps;

const MovieIcon: FunctionComponent<MovieIconProps> = ({
    image,
    imageAlt,
    title,
}) => {
    return (
        <div className="movie-icon">
            <a href="#" className="icon-overlay">
                <p>{title}</p>
            </a>
            <img src={image} alt={imageAlt} />
        </div>
    );
};

export default MovieIcon;
