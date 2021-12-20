import { Router } from 'express'

const blog = Router()

blog.get('/', (req, res) => {
  res.send('blog home')
})

blog.get('/new', (req, res) => {
  res.send('This is a new posting!')
})

export default blog
