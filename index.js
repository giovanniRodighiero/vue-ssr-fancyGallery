const fs = require('fs');
const path = require('path');
const express = require('express');
const vueServerRenderer = require('vue-server-renderer');

const app = express();

const serverBundleFile = fs.readFileSync('./dist/bundle.server.js', 'utf8');
const bundleRenderer = vueServerRenderer.createBundleRenderer(serverBundleFile);

const clientBundleFileUrl = 'dist/bundle.client.js';
// Server-Side Rendering
app.get('/', function (req, res) {
  bundleRenderer.renderToString((err, html) => {
    if (err){
      res.status(500).send(`
        <h1>Error: ${err.message}</h1>
        <pre>${err.stack}</pre>
      `);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Vue fancy gallery | SSR</title>
          </head>
          <body>
            ${html}
            <script src="${clientBundleFileUrl}"></script>
          </body>
        </html>`);
    }
  });
});

app.use('/dist', express.static('dist'));
// Start server
const PORT = 4000;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
