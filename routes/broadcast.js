const express = require('express');
const trustedParties = require('../trusted-parties.json')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.status(200).send(trustedParties);
});

module.exports = router;
