const express = require('express');

const app = express();



app.listen(3000, () => console.log(`Connect to http://127.0.0.1:3000`));

app.get('/', (req, res) => {
    res.redirect(`/home`)
})

app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/pages/home.html`)
})

app.get("/login", async (req, res) => {
    res.sendFile(`${__dirname}/pages/login.html`)
})

app.get("/signup", (req, res) => {
    if (localStorage.getItem("token")) return res.redirect("/login")
    res.sendFile(`${__dirname}/pages/signup.html`)
})