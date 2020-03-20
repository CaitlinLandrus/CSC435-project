//this is my node server
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//used youtube.com/watch?v=NX3jqtwfzVY as reference on the path and react side
express()
  .use(express.static(path.join(__dirname, 'build')))
  .set('build', path.join(__dirname, 'index.html'))
  .set('view engine', 'ejs')
  //https://www.freecodecamp.org/news/deploy-a-react-node-app-to/
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
