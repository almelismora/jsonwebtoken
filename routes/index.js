const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)) {
  res.json({
    text: 'api works'
  })
}




module.exports = router;
