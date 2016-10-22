const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  
  // This code will be compiled 
  entry: "./src/client/index.jsx",

  // Then output into this file
  output: {
    filename: "public/bundle.js"
  },


  // This will be what we do
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")      
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // These are the specific transformations we'll be using. 
          presets: ['react', 'es2015']
        }
      }
    ]
  },

    plugins: [
    new ExtractTextPlugin("webpackStyle.css")
  ],

  resolve: {
    extensions: ['', '.jsx', '.js']
  }

}