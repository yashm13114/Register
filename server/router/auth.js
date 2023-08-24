const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose
    .connect("mongodb://0.0.0.0:27017/login")
    .then(() => {
        console.log("Connected to mongo");
    })
    .catch((err) => {
        console.log("error" + err);
    });
const User = require('../model/UserSchema');



router.get('/', (req, res) => {
    res.send(`hello world router`);
});
router.get('/router', (req, res) => {
    res.send(`hello world router`);
});

router.post('/register', async(req, res) => {
    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword) {
        return res.json({ error: "plz fill it" });
    }
    try {
        const userExist = await User.findOne({ email: email });


        if (userExist) {
            return res.status(422).json({ error: "email is already used" });
        }
        const user = new User({ name, email, password, cpassword });

        await user.save();

        res.status(201).json({ message: "successfully" });

    } catch (err) {
        console.log(err);
    }

});
module.exports = router;