// CRUD create read update delete

const { ObjectId, MongoClient } = require('mongodb-legacy')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('UNable to connect to database')
    }

    const db = client.db(databaseName)


/*     db.collection('tasks').insertOne({
        description: 'laundry', 
        completed: false}
    , (error, result) => {
        if (error) {
            return console.log('unable to insert documents')
        }

        console.log(result)
    }) */


    

})

