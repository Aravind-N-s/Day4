require('dotenv').config()
const {mongoose} = require('./config/database')
const express = require('express')
const bodyParser = require("body-parser");
const {logger} = require('./config/logger')
const cors = require('cors')
const router = require('./config/routes')
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/profile', router)
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})
app.use((error, req,res,next) =>{
    res.status (error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
    logger.error(error.message)
})
app.listen(port ,() =>{
    logger.info('Listening on port', port)
})

module.exports = app