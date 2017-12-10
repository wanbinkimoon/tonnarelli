'use strict';

var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: "./index.html",
  output: {
      path: __dirname + "/build",
      filename: "index.html"
  }
};