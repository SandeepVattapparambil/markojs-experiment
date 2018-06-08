/**
 * Marko + Express App
 * Written by: Sandeep Vattapparambil
 */

/**
 * Allow Node.js to require and load `.marko` files
 */
require('marko/node-require');
const express = require('express');
const markoExpress = require('marko/express');
const compression = require('compression');
const lasso = require('lasso');
const view = require('./views');
const port = 3000;

/**
 * Lassojs Configuration
 */
lasso.configure(require('./config/lasso'));

/**
 * Express app instance
 */
const app = express();

/**
 * enable res.marko(template, data)
 */
app.use(markoExpress());

/**
 * Enable gzip compression for all HTTP responses
 */
app.use(compression());

/**
 * Allow all of the generated files under "static" to be served up by Express
 */
app.use(require('lasso/middleware').serveStatic());

app.get('/', function (req, res) {
    let data = {
        brand: 'Unsplash Marko'
    };
    res.marko(view, data);
});

/**
 * Start app server
 */
app.listen(port, function(){
    console.log(`App started and listening on port: ${port}`);
});