require('dotenv').config
const mongoose = require('mongoose')
const {logger} = require('./logger')
mongoose.Promise = global.Promise
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    useUnifiedTopology: true,
    poolSize: 10
  };

//connect to db
mongoose.connect(process.env.MONGODB_URI , options)
    .then(() => {
        logger.info('Connected to the Database')
    })
    .catch((err) => {
        logger.fatal('ERROR connected to Database', err.message)
    })

module.exports = {
    mongoose
}
//single value sent module.exports = mongoose