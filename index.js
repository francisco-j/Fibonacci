const express = require('express')
const appRouter = require('./routes')

const app = express()
app.use('/', appRouter)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port}!`))
