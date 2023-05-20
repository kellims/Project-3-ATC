
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;


const locationsController = require('./controllers/locations')
const informationController = require('./controllers/information')

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json("Hello World")
})

app.use('/', locationsController);
app.use('/information', informationController);

app.get('/*', (req, res) => {
    res.json({comment: "404 Error"});
})


app.listen(PORT, () => {
    console.log(`$ 💲 ＄ Server is listening to PORT ${PORT}`)
})