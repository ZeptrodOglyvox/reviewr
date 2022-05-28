import React, { useEffect, useState } from "react";

import "./App.css";
import defaultConfig from "./config";
import MovieGrid from "./components/MovieGrid";

type AppProps = {};

const App: React.FC<AppProps> = () => {
    const [title] = useState(defaultConfig.title);
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <h1>{defaultConfig.title}</h1>
            <MovieGrid></MovieGrid>
        </div>
    );
};

export default App;
