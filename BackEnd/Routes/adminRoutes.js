const express = require('express')
const { createAdmin, getAdmin } = require('../Controller/adminController')

const router = express.Router()
router.post("/", createAdmin)
router.get('/get', getAdmin)

module.exports= router