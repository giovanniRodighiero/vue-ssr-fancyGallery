# Vuejs image gallery

It is a simple app that shows a gallery of random images with a fancy effect for the zoom/lightbox action.

## Tecnologies
* __Vue.js__: used to build the gallery
* __vue-server-render__: to "compile" the dom for server side rendering
* __express.js__: to handle the server side rendering
* __webpack__: module bundler, used to compile the .vue assets and generate the two different builds needed in SSR
* __yarn__: package manager like NPM, used for handling the dependencies
* __TweenLite__: animation library, used to make the gallery cool

## Usage
Download the required dependencies `yarn install`


Build the two bundle with:
* `webpack --config webpack/webpack.config.server.js` for the server
* `webpack --config webpack/webpack.config.client.js` for the client

Launch the app with `node .`
