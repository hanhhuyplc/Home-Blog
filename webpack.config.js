const path = require('path');

module.exports = {
    entry: {
        main: path.join(__dirname, 'src/index.js'),
    },

    output: {
        path: path.join(__dirname, 'product-build'),
        publicPath: '/',
        filename: '[name].js',
        clean: true,
    },

    mode: 'production',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node-modules/,
                loader: 'babel-loader',
            },
        ],
    },
};
