const express = require('express')
const router = express.Router()
const { createAnimal, getAnimals, getAnimal, deleteAnimal } = require('../controllers/animalController')
const path = require('path')

router.use(express.static(path.join(global.rootDir, '/public')))

router.get('/', (req, res) => {
    res.sendFile(global.rootDir + '/views/list.html')
})
router.get('/newItem', (req, res) => {
    res.sendFile(global.rootDir + '/views/newItem.html')
})
router.get('/edit', (req, res) => {
    res.sendFile(global.rootDir + '/views/editItem.html')
})
router.get('/:username', getAnimals)
router.get('/item/:id', getAnimal)

router.post('/newItem', createAnimal)

router.delete('/delete/:id', deleteAnimal)


module.exports = router
