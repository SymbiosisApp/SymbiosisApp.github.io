module.exports = {
    context: __dirname + "/src",
    entry: "./boot.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
}
