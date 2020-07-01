var path = require('path');

module.exports = {
    mode: 'production',
    entry: './lib/MenuContainer.js',
    output: {
        path: path.resolve('lib'),
        filename: 'MenuContainer.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}