import { getCollection } from "../db";
import { Movie } from "../models/movies.model";
import { Collection } from "mongodb";
import collections from "../constants/collections";

export default class MoviesController {
    static all = async (): Promise<Movie[]> => {
        const movies: Collection = await getCollection(collections.MOVIES);
        return (await movies.find({}).limit(20).toArray()) as Movie[];
    };
}
