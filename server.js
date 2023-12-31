const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const menuController = require('./MenuController');

app.use('/', menuController);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});