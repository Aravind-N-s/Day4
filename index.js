require('dotenv').config()
const express = require('express')
const log4js = require('log4js')
const logger = log4js.getLogger()
const cors = require('cors')
const {mongoose} = require('./config/database') // mongoose without {} if single value is passed
const app = express()
const router = require('./config/routes')

const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use('/profile', router) //1st approach

app.listen(port ,() =>{
    console.log('Listening on port', port)
})