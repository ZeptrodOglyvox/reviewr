import React from "react";

import MovieGrid from "./components/MovieGrid";
import useApp from "./hooks/App.hooks";

type AppProps = {};

const App: React.FC<AppProps> = () => {
    const { title, movies } = useApp();

    return (
        <div>
            <h1>{title}</h1>
            <MovieGrid movies={movies} />
        </div>
    );
};

export default App;
