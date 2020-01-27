var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient
const dbName = "questiontreeDb"
const DATABASE_URL = "mongodb://localhost:27017/" + dbName;
const client = new MongoClient(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = client.connect()

// const db = () => {
//     // var db_connection = mongoose.connect(DATABASE_URL);
//     // db_connection.on('error', console.error.bind(console, 'connection error...'));
//     return mongoose.connect(DATABASE_URL);
//     // console.log("Trying connect to database...");
//     // db_connection.once('open', function(){
//     //     console.log("Connection to database successful...");
        
//     // })
    
//     // console.log("Waiting for connection to database...");  
// }
module.exports = {connection, client, dbName};