const express = require('express');
const routes = require('./routes');
const app = express();

require('./database/index');

console.log('---- Server online ----');
app.use(express.json());

app.use(routes);

app.listen(3333);
