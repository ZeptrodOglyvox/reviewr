import { Db, MongoClient } from "mongodb";
import collections from "../constants/collections";
import MoviesController from "./movies.controller";
import * as dbservice from "../db";

describe("insert", () => {
    let connection: MongoClient;
    let db: Db;
    const dbSpy = jest.spyOn(dbservice, "getDB");
    const collSpy = jest.spyOn(dbservice, "getCollection");

    beforeAll(async () => {
        connection = await MongoClient.connect(process.env.MONGO_URL!);
        db = connection.db();
        dbSpy.mockResolvedValue(db);
        collSpy.mockImplementation(async (c) => db.collection(c));
    });

    afterAll(async () => {
        await connection.close();
    });

    test("returns empty array", async () => {
        const result = await MoviesController.all();
        expect(result).toEqual([]);
        expect(collSpy).toHaveBeenCalled();
    });

    test("returns a movie", async () => {
        const mockMovies = [
            {
                image: "http://link.to.img",
                title: "Movie Title",
            },
            {
                image: "http://link2.to.img",
                title: "Movie Title 2",
            },
        ];

        const movies = db.collection(collections.MOVIES);
        await movies.insertMany(mockMovies);

        const result = await MoviesController.all();
        expect(result).toEqual(mockMovies);
        expect(collSpy).toHaveBeenCalled();
    });
});
