import express from "express";
const app = express();
app.use(express.json());

import dotenv from 'dotenv';
dotenv.config();

app.get('/', (req, res) => {
    res.send('SEVER IS RUNNING')
});
app.get('/movies', (req, res) => {
    res.send('WATCH THE LATEST MOVIES')
});






const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`SERVER IS AT PORT ${PORT}`)
})

