var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './public/js/src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, './public/js/dist'),
        publicPath: './public/js',
        filename: 'app.min.js',
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules'],
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: 'babel-loader!jsx-loader', exclude: /node_modules/ },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.css$/, loader: "style!css" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};
