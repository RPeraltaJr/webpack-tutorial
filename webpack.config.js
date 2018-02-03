module.exports = {

    // define entry point/file [main.js]
    entry: './assets/js/main.js',
    
    // define output point
    output: {
        path: __dirname + '/assets/build/js',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/, // only run tests on file with .js extension
                exclude: /(node_modules)/, // exclude node_modules folder
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'] // es2015 or jsx
                }
            },
            {
                test: /\.scss$/, // run on css files
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }

};