const Animal = require('../models/Animal')

const createAnimal = async (req, res, next) =>{
    const { breed, type, user, pros, cons } = req.body

    try {
        const newAnimal = new Animal({ breed, type, user, pros, cons })
        await newAnimal.save()
        res.status(201)
        res.redirect('/list')
        next()
    }
    catch (error){
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

const getAnimals = async (req, res) =>{}

const getAnimal = async (req, res) =>{}

const updateAnimal = async (req, res) =>{}

const deleteAnimal = async (req, res) =>{}

module.exports = { createAnimal }
