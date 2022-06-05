// Straight from https://dev.to/asjadanis/parsing-env-with-typescript-3jjm

import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../config.env") });

interface ENV {
    DB_CERT: string | undefined;
    DB_NAME: string | undefined;
    MONGO_URI: string | undefined;
    NODE_ENV: string | undefined;
    PORT: number | undefined;
}

interface Config {
    DB_CERT: string;
    DB_NAME: string;
    MONGO_URI: string;
    NODE_ENV: string;
    PORT: number;
}

const getConfig = (): ENV => {
    return {
        DB_CERT: process.env.DB_CERT,
        DB_NAME: process.env.DB_NAME,
        MONGO_URI: process.env.MONGO_URI,
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    };
};

const getSanitzedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
