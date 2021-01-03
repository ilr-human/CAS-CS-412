const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/giphyAPI');

router.route('/411Route')

    .get(async(req, res, next) => { //fetch function
        let result = await fetch(CONFIG.url + '?api_key=' + CONFIG.key + 'q='); //q= : search
        let giphy = await result.json();
        res.render('index', {
            title: 'GIPHY',
            search_query: giphy.data.username,
            gifs: giphy.data.images
        });
    })
    .post(async(req, res, next) => {
        let result = await fetch(CONFIG.url + 'api_key=' + CONFIG.key + 'q=' + req.body.search_query);
        let giphy = await result.json();
        res.render('index', {
            title: 'GIPHY REPORT',
            search_query: giphy.data.username,
            gifs: giphy.data.images
        });
    })

module.exports = router;
