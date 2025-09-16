const express = require('express')

require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// TO START DB: cd C:\Users\tyler\mongodb\bin
// ./mongod --dbpath="C:\Users\tyler\mongodb-data"


module.exports = app

