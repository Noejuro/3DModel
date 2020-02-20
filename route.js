const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const cors = require('cors');
const path = require('path');

app.use(cors());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public', 'index.html')) );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));