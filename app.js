const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/counselling', (req, res) => {
  res.render('pages/counselling')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})