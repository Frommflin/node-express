const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

global.rootDir = __dirname

connectDB();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})

app.use('/register', require('./routes/userRoutes'))
app.use('/login', require('./routes/authRoutes'))
app.use('/list', require('./routes/animalRoutes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
