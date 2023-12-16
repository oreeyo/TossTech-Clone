module.exports = {
    entry: "../src/app.js",
    output: {
        filename: "bundle.js",
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
