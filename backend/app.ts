import cors from "cors";
import express from "express";

import config from "./config";
import { getCollection } from "./db";
import moviesRouter from "./routes/movies.route";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.redirect("/movies/");
});

app.use("/movies", moviesRouter);

app.get("/testmongo", async (req, res, next) => {
    try {
        const collection = await getCollection("test");
        await collection.updateOne(
            { _id: 0 },
            { $push: { visits: new Date() } },
            { upsert: true },
        );
        res.json(await collection.findOne({ _id: 0 }));
    } catch (err) {
        next(err);
    }
});

app.listen(config.PORT, (): void => {
    console.log(`listening on http://localhost:5000`);
});
