require('dotenv').config()
const express = require('express')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const logger = require('morgan')


const app = express()
const path = require('path')
const port = 3000

app.use(errorHandler())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())

// Serve our CSS
app.use(express.static(path.join(__dirname, 'public')))

const Prismic = require('@prismicio/client');
const PrismicDOM = require('prismic-dom');

const initApi = (req) => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req
  });
}

const handleLinkResolver = () => {
  return '/'
}


app.use((req, res, next) => {

  res.locals.link = handleLinkResolver

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

  console.log(home.data.body)

  res.render('pages/home', {
    home,
    meta
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})