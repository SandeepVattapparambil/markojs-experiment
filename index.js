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
const axios = require('axios');
const wrapsplash = require('wrapsplash');
const port = 3000;

/**
 * Lassojs Configuration
 */
lasso.configure(require('./config/lasso'));

/**
 * Wrapsplash Configuration
 */
const UnsplashApi = new wrapsplash(require('./config/wrapsplash'));

/**
 * Express app instance
 */
const app = express();

/**
 * Custom Middleware
 */
app.use(require('./middleware'));

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

const URLS = require('./config/api');

app.get('/api/list/:start/:end', function (req, res) {
    let start = req.params.start || 1;
    let end = req.params.end || 9;
    let orderBy = 'latest';
    UnsplashApi.listPhotos(start, end, orderBy)
        .then(function (result) {
            res.json(result);
        }).catch(function (e) {
            console.log(e);
        });
});

app.post('/api/like/:id', function (req, res) {
    let photoId = req.params.id;
    UnsplashApi.likePhoto(photoId)
        .then(function (result) {
            res.json(result);
        }).catch(function (e) {
            console.log(e);
        })
})

app.post('/api/unlike/:id', function (req, res) {
    let photoId = req.params.id;
    UnsplashApi.likePhoto(photoId)
        .then(function (result) {
            res.json(result);
        }).catch(function (e) {
            console.log(e);
        })
})

app.get('/', function (req, res) {
    res.render('home');
    // let start = 1;
    // let end = 9;
    // axios.get(URLS.BASE_API_URL + '/list/' + start + '/' + end)
    //     .then(function (response) {
    //         data.imageData = response.data;
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
});

/**
 * Start app server
 */
app.listen(port, function () {
    console.log(`App started and listening on port: ${port}`);
});