const path = require('path');
const projectRoot = path.join(__dirname, '..');
module.exports = {
  target: 'node', // !different
  entry: path.join(projectRoot, 'src/server.js'),
  output: {
    libraryTarget: 'commonjs2', // !different
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.server.js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
      },
    ]
  },
};
