const express = require('express')
const { bankRoutes } = require('./routes/bankRoutes')

const port = 3001
const app = express()

app.use(express.json())

app.listen(port, () => console.log('Server is listening on port ' + port))

app.get('/', (req, res) => {
  res.end('Hello world')
})

app.use(bankRoutes)
