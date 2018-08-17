require('dotenv').config()
const express = require('express')
const app = express()
// const express = require('express-session')
const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
    console.log(`here we go again on port ${SERVER_PORT}`)
})