//this is my node server
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


//used youtube.com/watch?v=NX3jqtwfzVY as reference on the path and react side
var app = express()

app.use(express.static(path.join(__dirname, 'build')))
app.set('build', path.join(__dirname, 'index.html'))
app .set('view engine', 'ejs')
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
