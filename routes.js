const express = require('express');
const ssr = require('./ssr');

const router = express.Router();

router.post('/react/', (req, res) => {
  const markup = ssr.render(req.body.react);
  console.log('1111', JSON.parse({react: markup}));
  res.json({ react: markup })
})

module.exports = router;
