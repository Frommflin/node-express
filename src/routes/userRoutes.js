const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/userController')
const path = require('path')

router.use(express.static(path.join(global.rootDir, '/public')))

router.get('/', (req, res) => {
    res.sendFile(global.rootDir + '/views/register.html')
})
router.post('/', registerUser)

module.exports = router
