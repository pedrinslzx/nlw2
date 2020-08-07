import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  const users = [
    { name: 'Pedrinho Lemes', github: '@pedrinholemes' }
  ]
  return response.json(users)
})

app.listen(3333, () => console.log('App started'))
