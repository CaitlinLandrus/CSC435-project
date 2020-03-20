//this is my node server
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

//used youtube.com/watch?v=NX3jqtwfzVY as reference on the path and react side
app.use(express.static(path.join(__dirname, 'build')));
app.set('build', path.join(__dirname, 'index.html'));
app.set('view engine', 'ejs');
//https://www.freecodecamp.org/news/deploy-a-react-node-app-to/
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
