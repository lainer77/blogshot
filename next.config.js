module.exports = {
    webpack: config => {
        config.module.rules.push({
            test: /\.(js(x)?png|jpg)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]?[hash]",
                        emitFile: false,
                        publicPath: "/"
                    }
                },
                { loader: "babel-loader" }
            ],
            exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js(x)?$/]
            // test: /\.js(x)?$/,
            // use: [{ loader: "babel-loader" }]
        });
        return config;
    }
};
