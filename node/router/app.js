
const express = require('express');
const app = express();
const router = require('./routes');

app.use('/users', router);




app.listen(3000);