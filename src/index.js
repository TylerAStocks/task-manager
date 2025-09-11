const express = require('express')

require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


// TO START DB: cd C:\Users\tyler\mongodb\bin
// ./mongod --dbpath="C:\Users\tyler\mongodb-data"






app.listen(port, () => {
    console.log('Server is up on port ' + port)
})