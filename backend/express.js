import express from 'express'

import bodyParser from 'body-parser'

import bundleCompiler from './bundleCompiler'

import routes from './web.routes'


import dbConnect from './db.connect'

import errHandler from './errHandler'

import syncMulti from './web.syncMulti'

const app = express()

syncMulti(app)

dbConnect()

app.use(bodyParser.json())

bundleCompiler.compile(app)

app.use('/', routes)

app.use(errHandler)

