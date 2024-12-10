const User = require('../models/User')

const registerUser = async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    try {
        const newUser = new User({ username, password })
        const user = await newUser.save()
        res.status(201)
        res.redirect('/login')
        next()
    }
    catch (error){
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

module.exports = { registerUser }
