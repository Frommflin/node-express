const express = require('express')
const router = express.Router()
const { login } = require('../controllers/authController')
const path = require('path')

router.use(express.static(path.join(global.rootDir, '/public')))

router.get('/', (req, res) => {
    res.sendFile(global.rootDir + '/views/login.html')
})

router.post('/', login)

module.exports = router
