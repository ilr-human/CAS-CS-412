//routing file
const express = require('express');
const router = express.Router();

router.route('/ps3Route')

.get((req, res, next) => {
    console.table(`In ps3Route with ${req.body}`);
    console.log(`In ps3Route (GET)`);
    //res.render to build an HTML file with Pug
    res.render('index', {
        title: 'PS3',
        string: 'Hey now'
    });
})

.post((req, res, next) => {
    console.log(`In ps3Route (POST)`);
    res.render('index', {
        originalString: req.body.originalString,
        len: req.body.originalString.length
    });
})

module.exports = router;