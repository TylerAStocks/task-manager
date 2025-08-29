// CRUD create read update delete

const { ObjectId, MongoClient } = require('mongodb-legacy')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('UNable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('tasks').updateMany({completed: false}, {
        // update operator
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})

