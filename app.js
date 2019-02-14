const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('App has been initialised.');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
