const path = require('path');
const projectRoot = path.join(__dirname, '..');
module.exports = {
  entry: path.join(projectRoot, 'src/client.js'),
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.client.js',
  },
  resolve: {
    alias:{tweenLite: 'gsap/src/minified/TweenLite.min.js'}
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
