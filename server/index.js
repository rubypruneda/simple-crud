require('dotenv').config()
const express = require('express')
const app = express()
// const express = require('express-session')
const { SERVER_PORT } = process.env;

app.use(express.static(__dirname + '/public'))

app.get('/info', (req, res) => {
    console.log('hit');
    res.status(200).send([1,2,3,4,5,6,7])
})

app.delete('/delete', (req, res) => {

})

app.put('/update', (req, res) => {

})

app.post('/read', (req, res) => {

})

app.listen(SERVER_PORT, () => {
    console.log(`here we go again on port ${SERVER_PORT}`)
})