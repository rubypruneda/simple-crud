require('dotenv').config()
const express = require('express')
// const path = require('path')
const app = express()
// const express = require('express-session')
const { SERVER_PORT } = process.env;

app.use(express.static(__dirname + '/public'))

// app.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
//   })

app.get('/info', (req, res) => {
    console.log('hit');
    res.status(200).send([{name: 'nooby'},2,3,'hey it worked',5,{name: 'ruby'},7,['hello' , 'there' , 'numbers' , 1 , 77 , 54]])
})

app.delete('/delete', (req, res) => {
    // let dele = 
    console.log('delete');
    res.status(200).send('deletedasdf')
})

app.put('/update', (req, res) => {

})

app.post('/read', (req, res) => {

})

app.listen(SERVER_PORT, () => {
    console.log(`here we go again on port ${SERVER_PORT}`)
})