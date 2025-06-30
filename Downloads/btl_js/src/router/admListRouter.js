const express = require('express')
const router = express.Router()
const admListController = require('../controller/admListController')

router.post("/:ten/:id",admListController.delete)
router.get("/",admListController.render)


module.exports = router