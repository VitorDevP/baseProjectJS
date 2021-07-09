const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'none',
  output: {
    filename: process.env.WEBPACK_OUTPUT_FILE || 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
