const express = require('express')
const router = express.Router()
const path = require('path')

router.use(express.static(path.join(global.rootDir, '/public')))

router.get('/newItem', (req, res) => {
    res.sendFile(global.rootDir + '/views/newItem.html')
  })

module.exports = router
