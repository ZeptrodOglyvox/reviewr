import { useEffect, useState } from "react";
import defaultConfig from "../config";

interface AppHook {
    title: string;
    setTitle: (t: string) => void;
    movies: never[];
    setMovies: (m: never[]) => void;
}

const useApp = (): AppHook => {
    const [title, setTitle] = useState(defaultConfig.title);
    useEffect(() => {
        document.title = title;
    }, [title]);

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await window.fetch(
                `${defaultConfig.backendURL}:5000/movies`,
            );
            const movies = await response.json();
            setMovies(movies);
        };
        fetchMovies();
    }, []);

    return {
        title,
        setTitle,
        movies,
        setMovies,
    };
};

export default useApp;
