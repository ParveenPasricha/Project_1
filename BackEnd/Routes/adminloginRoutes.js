const express = require("express")
const { getAdminlogin, createAdminlogin } = require("../Controller/adminLoginController")
const router = express.Router()

router.post('/login', getAdminlogin)
router.post('/signup',createAdminlogin)

module.exports = router