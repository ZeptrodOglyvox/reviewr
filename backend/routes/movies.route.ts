import express from "express";
import MoviesController from "../controllers/movies.controller";

const moviesRouter = express.Router();

moviesRouter.get("/", MoviesController.all);

export default moviesRouter;
