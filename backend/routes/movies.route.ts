import express, { ErrorRequestHandler } from "express";
import MoviesController from "../controllers/movies.controller";

const moviesRouter = express.Router();

moviesRouter.get("/", async (req, res, next) => {
    try {
        res.json(await MoviesController.all());
    } catch (err) {
        next(err);
    }
});
moviesRouter.use(((err: Error, req, res, next) => {
    next(new Error("Movies error: " + err.message));
}) as ErrorRequestHandler);

export default moviesRouter;
