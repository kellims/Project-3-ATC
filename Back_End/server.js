
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json("Hello World")
})


app.listen(PORT, () => {
    console.log(`$ 💲 ＄ Server is listening to PORT ${PORT}`)
})