const express = require('express');
const router = express.Router();

const redisRoute = require ('redis');
const client = redisRoute.createClient();

router.get('/find/:country', (req, res, next) => {
    const country = req.params.country;

    client.exists(country, (err, response) => {
        if (err){
            throw new Error(err);
        }
        if (response == 1){ //key exists: grabs value
            client.get(country, (err, response) => {
                console.table(response);
                res.send(JSON.stringify(response + 'not in cache'));
            })
        }
        else{
            const countryJoined = country.split('').join('');
            //joins with array
            client.set(country, countryJoined, 'EX', 30, (err, response) => {
                //reversedName = value, name = key
                console.table(response);
                res.send(JSON.stringify(response + 'cached'));
            })
        }
    })
})

module.exports = router;
