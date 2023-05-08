const express = require('express');

const router = express.Router();
const { sequelize } = require('../models');

const trustedParty = sequelize.models.TrustedParty;

/* GET home page. */
router.get('/', async (req, res) => {
  const trustedParties = await trustedParty.findAll();
  res.status(200).send(trustedParties);
});

module.exports = router;
