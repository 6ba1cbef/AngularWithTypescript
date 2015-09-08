var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/bootstrap.js',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    include: [
        path.resolve(__dirname, 'app'),
    ],
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html-loader'}
        ]
    },
    plugins: [
        // Avoid publishing files when compilation failed
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    externals: {
        app: 'app'
    }
};
