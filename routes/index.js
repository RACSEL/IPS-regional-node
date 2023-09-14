const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  console.log("index");
  res.status(404).send();
});

module.exports = router;
