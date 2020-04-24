const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/applicationdb', {
            useNewUrlParser: true, useCreateIndex: true
        })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
