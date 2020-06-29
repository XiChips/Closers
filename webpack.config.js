var path =require('path')
var htmlWebpackPlugin =  require('html-webpack-plugin')//将main.js引入index.html
const VueLoaderPlugin = require('vue-loader/lib/plugin')



const webpack = require('webpack')

module.exports = {
    entry : path.join(__dirname,'./src/main.js'),
    output : {
        path : path.join(__dirname , './dist'),
        filename : 'bundle.js' ,
    },
    mode:'development',
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),    //指定模版页面，根据指定的页面路径，去生成内存中的页面
            filename:'index.html' //指定生成的页面名称
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({ $: 'jquery', jQuery:'jquery' })
    ],
    module:{//存放用于配置所有 第三方模块 的配置
        rules:[
            //css loader规则
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            //less
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            //scss
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            //img
            {
                test:/\.png|jpg|gif|bmp$/,
                use:'url-loader?limit=2847114&name=[hash:8]-[name].[ext]',//图片大小 大于 limit 图片将不会转为base64
            },
            //font
            {
                test : /\.ttf|eot|svg|woff|woff2$/,
                use :'url-loader'
            },
            //vue
            {
                test : /\.vue$/,
                use :'vue-loader'
            },
            //babel
            { 
                test: /\.js$/, 
                use: 'babel-loader', 
                exclude: /node_modules/
            },
        ]
    }
}