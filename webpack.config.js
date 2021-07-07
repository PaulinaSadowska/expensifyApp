const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProd = env.production === true
    console.log("env", env)
    console.log("isProd", isProd)
    return {
        entry: './src/app.js',
        plugins: [new MiniCssExtractPlugin()],
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


