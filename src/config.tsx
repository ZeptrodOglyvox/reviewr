export type Config = {
    title: string;
    backendURL: string;
};

const defaultConfig: Config = {
    title: "Reviewr",
    backendURL: "http://localhost",
};

export default defaultConfig;
