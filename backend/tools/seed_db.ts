import newClient from "../db";
import dotenv from "dotenv";
import movies from "../../data/movies";

dotenv.config();

const client = newClient({ credentials: process.env.DB_CERT || "" });
(async () => {
    try {
        await client.connect();
        const database = client.db(process.env.DB_NAME);
        const collection = database.collection("movies");
        await collection.deleteMany({});
        await collection.insertMany(movies);
    } finally {
        await client.close();
    }
})();
