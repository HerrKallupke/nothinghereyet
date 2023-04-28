const express = require('express');
const { PORT } = require('../config.json');

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('./static'));

app.get('/', (req, res) => {
    res.render('index.pug');
});

app.listen(PORT, () => {
    console.log(`There's nothing on port ${PORT}...`);
});