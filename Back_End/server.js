require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 4000;


const locationsController = require('./controllers/locations')
const informationController = require('./controllers/information')
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended:false }));

app.get('/', (req, res) => {
    res.json("Hello World")
})

app.use('/locations', locationsController);
app.use('/information', informationController);

app.get('/*', (req, res) => {
    res.json({comment: "404 Error"});
})


app.listen(PORT, () => {
    console.log(`$ 💲 ＄ Server is listening to PORT ${PORT}`)
})