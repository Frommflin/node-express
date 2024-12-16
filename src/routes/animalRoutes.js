const express = require('express')
const router = express.Router()
const { createAnimal, getAnimals, getAnimal, updateAnimal, deleteAnimal } = require('../controllers/animalController')
const path = require('path')
const authenticate = require('../middleware/authentication')

router.use(express.static(path.join(global.rootDir, '/public')))

router.get('/auth', authenticate, (req, res) => {
    res.json({status: res.statusCode})
})
router.get('/', (req, res) => {
    res.sendFile(global.rootDir + '/views/list.html')
})
router.get('/unauthorized', (req, res) => {
    res.sendFile(global.rootDir + '/views/notAllowed.html')
})
router.get('/newItem', (req, res) => {
    res.sendFile(global.rootDir + '/views/newItem.html')
})
router.get('/edit', (req, res) => {
    res.sendFile(global.rootDir + '/views/editItem.html')
})
router.get('/:username', getAnimals)
router.get('/item/:id', getAnimal)

router.patch('/edit/:id', updateAnimal)

router.post('/newItem', createAnimal)

router.delete('/delete/:id', deleteAnimal)


module.exports = router
