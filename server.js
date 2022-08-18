const express = require('express')

//CONFIGURATION 
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('Error 404: page not found!')
})

//LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})