const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/covidAPI');

router.route('/ps4Route')

.get(async(req, res, next) => { //fetch function
    let result = await fetch(CONFIG.url + 'US?appid=' + CONFIG.key);
    let covid = await result.json();
    res.render('index', {
        title: 'COVID-19',
        country: covid.data.name,
        population: covid.data.population,
        confirmed: covid.data.today.confirmed,
        deaths: covid.data.today.deaths
    });
})
.post(async(req, res, next) => {
    let result = await fetch(CONFIG.url + req.body.country + '?appid=' + CONFIG.key);
    let covid = await result.json();
    res.render('index', {
        title: 'COVID-19 REPORT',
        country: covid.data.name,
        population: covid.data.population,
        confirmed: covid.data.today.confirmed,
        deaths: covid.data.today.deaths
    });
})

module.exports = router;