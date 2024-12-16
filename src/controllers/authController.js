const User = require('../models/User')
const jwt = require('jsonwebtoken')

const login = async (req, res, next) => {
    const { username, password } = req.body

    try {
        const user = await User.findOne({ username })
        if(!user) return res.status(401).send("Couldn't find user")

        const pwdIsValid = (password == user.password) ? true : false
        if(!pwdIsValid) return res.status(401).send("Invalid password")

        const token = jwt.sign(
            { id: user._id, username: user.username },
            'JWT_SECRET',
            { expiresIn: '1h' }
        )

        res.status(200).json({user, token})
    }
    catch (error){
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

module.exports = { login }
