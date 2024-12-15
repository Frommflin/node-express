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

const getAnimals = async (req, res) =>{
    const { username } = req.params

    if( username == "" || username == "undefined" ){
        return res.status(400).json({ error: 'Error connectng to user. Try logging in again and  then try again.' });
    }

    try{
        const animals = await Animal.find({
            user: username
        })
        res.status(200).json(animals)
    }
    catch (error){
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

const getAnimal = async (req, res) =>{
    const { id } = req.params

    try {
        const animal = await Animal.findById(id)
        if (!animal) {
            return res.status(404).json({ message: 'Item not found'})
        }
        res.status(200).json(animal)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

const updateAnimal = async (req, res) =>{
    const { id } = req.params
    const { changedPros, changedCons } = req.body

    try {
        const animal = await Animal.findByIdAndUpdate(
            id, 
            { pros: changedPros, cons: changedCons },
            { new: true }
        )
        if (!animal) {
            return res.status(404).json({ message: 'Item not found' })
        }
        res.status(200).json(animal)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

const deleteAnimal = async (req, res) =>{
    const { id } = req.params

  try {
    const animal = await Animal.findByIdAndDelete(id)
    if (!animal) {
      return res.status(404).json({ message: 'Could not find animal'})
    }
    res.status(200)
    res.redirect('/list')
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { createAnimal, getAnimals, getAnimal, updateAnimal, deleteAnimal }
