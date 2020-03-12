//this is my node server
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//used youtube.com/watch?v=NX3jqtwfzVY as reference on the path and react side
express()
  .use(express.static(path.join(__dirname, 'build')))
  .set('build', path.join(__dirname, 'index.html'))
  //.set('view engine', 'ejs')
  .get('/', (req, res) => res.render('build/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
