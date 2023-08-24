const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./Config.env" });
const app = express();
port = 5000;

// app.use(require('./router/auth'))
app.use(express.json());
app.use(require('./router/auth'));

mongoose
    .connect("mongodb://0.0.0.0:27017/login")
    .then(() => {
        console.log("Connected to mongo");
    })
    .catch((err) => {
        console.log("error" + err);
    });

app.get("/", (req, res) => {
    res.send("hello");
    res.sendFile(__dirname + "./router/auth");
});



app.listen(port, () => {
    console.log(`server is running at ${port}`);
});