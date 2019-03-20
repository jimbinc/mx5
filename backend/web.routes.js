import express from 'express'

import ctrls from './db.controllers'

import Template from '../Template'

const router = express.Router()

router.get('/user/:name', ctrls.setUser)

router.post('/post', ctrls.setPost)

router.get('/delpost/:id', ctrls.delPost)

router.get('/list', ctrls.list)

router.get('*', (req, res) => {
  res.send(Template())
})

export default router

