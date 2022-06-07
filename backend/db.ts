import { Collection, Db, MongoClient, ServerApiVersion } from "mongodb";
import "fs";

import config from "./config";

let db: Db | undefined = undefined;

export async function getDB(): Promise<Db> {
    // FIXME: Time out connection and check to reconnect.
    if (db === undefined) {
        MongoClient.connect(config.MONGO_URI, {
            sslKey: config.DB_CERT,
            sslCert: config.DB_CERT,
            serverApi: ServerApiVersion.v1,
        }).then(
            (client) => {
                db = client.db(config.DB_NAME);
            },
            () => {
                throw new Error("Error connecting to database");
            },
        );
    }

    return db!;
}

export const getCollection = async (
    collection: string,
): Promise<Collection> => {
    const db = await getDB();
    return db.collection(collection);
};
