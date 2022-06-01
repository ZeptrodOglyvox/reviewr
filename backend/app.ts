import dotenv from "dotenv";
import express, { Application } from "express";
import moviesRouter from "./routes/movies.route";
import cors from "cors";

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.redirect("/movies/");
});

app.use("/movies", moviesRouter);

app.listen(process.env.APP_PORT || 5000, (): void => {
    console.log(`listening on http://localhost:5000`);
});
