const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization

  if ( !authHeader || !authHeader.startsWith('Bearer ') ) {
    res.status(401)
    next()
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, 'JWT_SECRET')
    res.status(200)
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ message: 'Invalid or expired token. Log in again' })
  }
}

module.exports = authenticate