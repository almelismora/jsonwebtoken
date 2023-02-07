const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({
    text: 'api works'
  })
})

router.post( '/api/login', (req, res) => {
  const user = {id: 3}
  const token = jwt.sign({user}, 'my_secret_key')
})


module.exports = router;
