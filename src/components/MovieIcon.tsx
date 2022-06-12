import React, { FunctionComponent } from "react";
import "../styles/MovieIcon.css";

interface OwnProps {
    _id: string;
    image: string;
    imageAlt: string;
    title: string;
}

export type MovieIconProps = OwnProps;

const MovieIcon: FunctionComponent<MovieIconProps> = ({
    _id,
    image,
    imageAlt,
    title,
}) => {
    return (
        <div className="movie-icon" key={_id}>
            <a href="#" className="icon-overlay">
                <p>{title}</p>
            </a>
            <img src={image} alt={imageAlt} />
        </div>
    );
};

export default MovieIcon;
