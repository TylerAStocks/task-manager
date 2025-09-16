const app = require('./app')

const port = process.env.PORT

// TO START DB: cd C:\Users\tyler\mongodb\bin
// ./mongod --dbpath="C:\Users\tyler\mongodb-data"

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

