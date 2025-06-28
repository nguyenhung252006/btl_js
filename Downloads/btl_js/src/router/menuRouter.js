const express = require('express')
const router = express.Router()
const MenuController = require('../controller/menuController')

router.post("/:address/:mota",MenuController.filter)
router.post("/:address",MenuController.render)
router.get("/",MenuController.show)

module.exports = router