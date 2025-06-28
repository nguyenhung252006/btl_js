const express = require('express')
const router = express.Router()
const AdmController = require('../controller/admController')

router.post("/",AdmController.add)
router.get("/",AdmController.show)

module.exports = router