const express = require('express');
const trustedParties = require('../trusted-parties.json')

const router = express.Router();

/* GET*/
router.get('/', (req, res) => {
  console.log("tp");
  res.status(200).send(trustedParties);
});

module.exports = router;
