// Allow Node.js to require and load `.marko` files
require('marko/node-require');
const express = require('express');
const markoExpress = require('marko/express');
const compression = require('compression');
require('lasso').configure({
    plugins: [
        'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
    ],
    outputDir: __dirname + '/static', // Place all generated JS/CSS/etc. files into the "static" dir
    bundlingEnabled: false, // Only enable bundling in production
    minify: false, // Only minify JS and CSS code in production
    fingerprintsEnabled: false, // Only add fingerprints to URLs in production
});
const view = require('./views');

const app = express();
//enable res.marko(template, data)
app.use(markoExpress());
// Enable gzip compression for all HTTP responses
app.use(compression());

// Allow all of the generated files under "static" to be served up by Express
app.use(require('lasso/middleware').serveStatic());

app.get('/', function (req, res) {
    let data = {
        name: 'Unsplash Marko'
    };
    res.marko(view, data);
});

app.listen(8080, function(){
    console.log('App started and listening on port: 8080');
});