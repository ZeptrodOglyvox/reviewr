import express from "express";
import movies from "../data/movies.data";

export default class MoviesController {
    static async all(
        req: express.Request,
        res: express.Response,
    ): Promise<any> {
        return res.json(movies);
    }
}
