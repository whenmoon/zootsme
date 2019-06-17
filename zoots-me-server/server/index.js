const express = require('express');
const app = express();
const port = 4000;
const router = require('./router.js');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}`));
