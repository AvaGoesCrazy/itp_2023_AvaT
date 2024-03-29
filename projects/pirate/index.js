/*
 * Trivial web server that serves the contents of the public/ directory.
 */

import express from 'express';
import serveIndex from 'serve-index';
const port = 3000;

const app = express();

app.use(express.static('public'), serveIndex('public'));

app.listen(port, function () {
  console.log(`Listening on port ${this.address().port}`);
});
