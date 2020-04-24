//Import Modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

//Global Variables
const app = express()
const PORT = process.env.PORT || 8080


//Import Files
const routes = require('./routes')

//Connect DB
const db = require('./backend/DB')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


//Configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes);


//if(process.env.NODE_ENV ==='production'){

    app.use(express.static(path.join(__dirname, 'build')))
    app.set('build', path.join(__dirname, 'index.html'))
    app .set('view engine', 'ejs')
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    })

//}


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
