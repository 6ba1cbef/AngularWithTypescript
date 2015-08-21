var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/app.ts',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    include: [
        path.resolve(__dirname, 'app'),
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation failed
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    }
};
