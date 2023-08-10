// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello we are there');
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000...');
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
