import { get_collection } from "../db";
import { Movie } from "../types/movies.types";
import { Collection } from "mongodb";

export default class MoviesController {
    static all = async (): Promise<Movie[]> => {
        const movies: Collection = await get_collection("movies");
        return (await movies
            .find({})
            .project({ _id: 0 })
            .limit(20)
            .toArray()) as Movie[];
    };
}
