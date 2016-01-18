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
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};
