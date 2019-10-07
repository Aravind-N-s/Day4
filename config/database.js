require('dotenv').config
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

//connect to db
mongoose.connect(process.env.MONGODB_URI , { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to the DB')
    })
    .catch((err) => {
        console.log('ERROR connected to DB', err)
    })

module.exports = {
    mongoose
}
//single value sent module.exports = mongoose