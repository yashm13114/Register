const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your Name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your Name']
    },
    password: {
        type: String,
        required: [true, 'Please enter your Name']
    },
    cpassword: {
        type: String,
        required: [true, 'Please enter your Name']
    },
})
const User = mongoose.model("User", userSchema)
module.exports = User
    // module.exports=new mongoose.model("User",userSchema)