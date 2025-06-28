const express = require('express')
const router = express.Router()
const admListController = require('../controller/admListController')

router.get("/",admListController.render)

module.exports = router