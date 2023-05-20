
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


const locationsController = require('./controllers/locations')
const informationController = require('./controllers/information')

app.use(express.json());

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