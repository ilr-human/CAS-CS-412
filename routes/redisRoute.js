const express = require('express');
const router = express.Router();

const redisRoute = require ('redis');
const client = redisRoute.createClient();

router.get('/find/:name', (req, res, next) => {
    const name = req.params.country;

    client.exists(name, (err, response) => {
        if (err){
            throw new Error(err);
        }
        if (response == 1){ //key exists: grabs value
            client.get(name, (err, response) => {
                console.table(response);
                res.send(JSON.stringify(response + 'not in cache'));
            })
        }
        else{
            const reversedName = name.split('').sort().join('');
            //reversed string using array
            client.set(name, reversedName, 'EX', 30, (err, response) => {
                //reversedName = value, name = key
                console.table(response);
                res.send(JSON.stringify(response + 'cached'));
            })
        }
    })
})

module.exports = router;