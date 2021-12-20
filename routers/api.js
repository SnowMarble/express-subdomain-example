import { Router } from 'express'

const api = Router()

api.get('/', (req, res) => {
  res.send('api home')
})

export default api
