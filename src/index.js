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


/* const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {

    const user = await User.findById('68c4452c7de806292c6ee440').populate('tasks').exec()
    console.log(user.tasks)

}

main() */