const express = require('express')

const app = express()

app.use(express.json())

app.get('/ping', (req, res) => {
  return res.status(200).json({ pong: 'pong' })
})

app.listen(3000, () => {
  console.log('app running')
})