const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()
const path = require('path')

const app = express()
const port = 3000

connectDB();
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})
app.get('/list', (req, res) => {
  res.sendFile(__dirname + '/views/list.html')
})
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html')
})
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/register.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
