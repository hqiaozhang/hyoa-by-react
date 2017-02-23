var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './app/src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'build.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    'env': {
                        'development': {
                            'presets': ['react-hmre', 'es2015', 'react']
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' }
        ]
    }
}