const express = require('express')
const router = express.Router()
const MenuController = require('../controller/menuController')


router.get("/",MenuController.show)

module.exports = router