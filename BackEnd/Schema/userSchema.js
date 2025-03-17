const mongoose = require("mongoose")

const userSchema =new mongoose.Schema({
    user: {
        type: String,
    },
    mobile:{
        type: String,
        unique: true,
        required: true
    }
})
const userModel = mongoose.model("USER",userSchema)
module.exports = userModel