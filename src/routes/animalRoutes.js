const express = require('express')
const router = express.Router()
const { createAnimal, getAnimals, deleteAnimal } = require('../controllers/animalController')
const path = require('path')

router.use(express.static(path.join(global.rootDir, '/public')))

router.get('/', (req, res) => {
    res.sendFile(global.rootDir + '/views/list.html')
})
router.get('/:username', getAnimals)

router.get('/newItem', (req, res) => {
    res.sendFile(global.rootDir + '/views/newItem.html')
})
router.post('/newItem', createAnimal)

router.delete('/delete/:id', deleteAnimal)

module.exports = router
