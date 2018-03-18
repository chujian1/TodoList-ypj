/**
 * Created by ypj on 18-3-18.
 */
const path = require('path');

module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module: {
        rules:[{
            test:/\.js$/,
            use:[{
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }]
        }]
    }
}