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
  initApi(req).then(api => {
    api.query(
      Prismic.Predicates.any('document.type', ['meta', 'header'])) 
      .then(response => {
      const { results } = response
      const [meta, header] = results

      console.log(meta, header)

      res.render('pages/home', {
        header,
        meta
      })
    })
  })
})

app.get('/counselling', async (req, res) => {
  res.render('pages/counselling')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})