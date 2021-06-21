require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const Prismic = require('@prismicio/client');
const PrismicDOM = require('prismic-dom');

const initApi = (req) => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req
  });
}

// middleware
app.use((req, res, next) => {
  res.locals.ctx = {
    endpoint: process.env.PRISMIC_ENDPOINT
  }
  res.locals.PrismicDOM = PrismicDOM
  next()
})

// pug setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// routes
app.get('/', async (req, res) => { 
  const api = await initApi(req)
  const home = await api.getSingle('home')
  const meta = await api.getSingle('meta')

  console.log(home.data)

  res.render('pages/home', {
    home,
    meta
  })
})



app.get('/counselling', async (req, res) => {
  res.render('pages/counselling')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})