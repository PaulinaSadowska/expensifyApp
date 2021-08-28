const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
    require('dotenv').config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
    require('dotenv').config({ path: ".env.development" });
}

module.exports = (env) => {
    const isProd = env.production === true
    console.log("env", env)
    console.log("isProd", isProd)
    return {
        entry: ['babel-polyfill', './src/app.js'],
        plugins: [
            new MiniCssExtractPlugin(),
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGE_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGE_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
            })
        ],
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }]
        },
        mode: isProd ? 'development' : 'production',
        devtool: isProd ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "public"),
            compress: true,
            publicPath: '/dist/',
            port: 9000,
            historyApiFallback: true,
        }
    };
};


