const { default: mongoose } = require("mongoose");

const adminLoginSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    }
})
const adminModel = mongoose.model("adminlogin", adminLoginSchema)
module.exports = adminModel