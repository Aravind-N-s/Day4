const mongoose = require('../../config/database')
module.exports.readUser = (data) => {

  try {
  // readyState to check if mongoose connection is open
  const { readyState } = mongoose.connection

  // throw MongooseConnectionError if readyState is 0 means connection is not established
  if (readyState === 0) throw MongooseConnectionError("MongoDB Not Connected")

  // throw UserNotFoundException if user is null means user is not found
  if (data === null) throw new DataNotFoundException(`data with id: ${req.params.id} not found.`)

  // send data as response if data is found successfully
  res.status(HttpStatus.OK).json({ data })

  } catch (e) {

    switch (true) {

      // catch MongooseConnectionError if connection with mongoDB is not open
      case e instanceof MongooseConnectionError:
        logger.error(e.name, e.message)
        break;

      // catch CastError when id is invalid
      case e instanceof mongoose.Error.CastError:
        logger.error(e.name, e.message);
        break;

      // catch dataNotFoundException when data for given id is not found
      case e instanceof dataNotFoundException:
        logger.error(e.name, e.message);
        break;
    }
    res.status(HttpStatus.NOT_FOUND).json({ message: "data Not Found" })
  }
}