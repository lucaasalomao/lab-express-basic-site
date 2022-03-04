/* Perguntas

1) .listen é um método nativo do express?
2)

*/

const express = require('express')

// We create our own server named app
// Express server will be handling requests and responses
const app = express()

// Make everything inside of public/ available
app.use(express.static('public'));

// first Route
app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html')}
)

// second Route
app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html')}
)   

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));