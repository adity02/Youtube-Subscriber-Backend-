const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// config for env
require("dotenv").config();

// Connect to DATABASE
//Local to URI
// const DATABASE_URL = "mongodb://localhost/subscribers";


// Cluster URI
const DATABASE_URL =process.env.DATABASE_URI;

//connect to MongoDB using Mongoose
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true, dbName:"subscribers" });
const db = mongoose.connection

// handles the error
db.on('error', (err) => console.log(err))
//logs a success message
db.once('open', () => console.log('Database created...', dbName))


// Refresh all connections
const refreshAll = async () => {
    // console.log(deleting previous data)
    await subscriberModel.deleteMany({})

    // console.log(inserting data)
    await subscriberModel.insertMany(data)

    // console.log(database disconnect)
    await mongoose.disconnect();
}
refreshAll()