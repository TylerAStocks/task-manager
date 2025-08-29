// CRUD create read update delete

const { ObjectId, MongoClient } = require('mongodb-legacy')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('UNable to connect to database')
    }

    const db = client.db(databaseName)

/*     db.collection('users').findOne({ name: 'Tyler'}, (error, user) => {
        if (error) {
            return console.log('unable to find user')
        }

        console.log(user)
    }) */

/*     db.collection('users').find({age: 26}).toArray((error, count) => {
        if (error) {
            return console.log('no users found')
        }

        console.log(count)
    }) */

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        if (error) {
            return console.log('no tasks found')
        }
        console.log(tasks)
    })
    

})

