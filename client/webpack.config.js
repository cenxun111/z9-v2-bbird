const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    devServer: {
    
            // contentBase: './dist',
        
        
        port:9000,
        // publicPath:'http://localhost/',
        historyApiFallback: true,
        proxy: {
    //            "/api":{
    //            target:'http://localhost:6400',
    //            bypass: function (req, res, proxyOptions) {
    //             if (req.headers.accept.indexOf('html') !== -1) {
    //               return '/index.html';
    //         }},
    //   },

    
        "/api":'http://localhost:8400',
     
    },
},
    entry:"./src/index.js",
    output:{
        path: path.join(__dirname,"/dist"),
        // publicPath: './',
        filename:"index_bundle.js",
        publicPath:'/'
    },
    // resolve: {
    //     extensions: [".js", ".jsx"]
    // },
 
    
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                },
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader",'postcss-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                  },
                ],
              },
        ]
     
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            favicon: "./favicon.ico"
        })
    ]
};