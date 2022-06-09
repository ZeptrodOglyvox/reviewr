const config = {
    mongodbMemoryServerOptions: {
        binary: {
            version: "5.0.8",
            skipMD5: true,
        },
        autoStart: false,
        instance: {},
    },
};

export default config;
