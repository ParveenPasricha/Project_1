const { createUser, getUser } = require("../Controller/userController")
const express = require('express')

const router = express.Router()

router.post("/signup", createUser)
router.post("/login", getUser)

module.exports= router
