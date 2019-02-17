const express = require('express');
const { render } = require('./ssr');

const router = express.Router();

router.post('/react/', (req, res) => {
  const markup = render(req.body.react);
  res.json({html: markup})
})

module.exports = router;
