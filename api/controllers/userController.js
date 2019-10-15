const {User} = require('../models/userModel')
const {logger} = require('../../config/logger')
module.exports.list = (req,res) => {
  logger.info(req.params)
    User.find().sort({createdAt: -1})
    .then((users) => {
        res.send(users)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.create = (req,res) =>{
    const body = req.body
    const user = new User(body)
    user.save()
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    })

}

module.exports.update =  (req, res) => {
  const id = req.params.id
  const body = req.body
  User.findOneAndUpdate(id, { $set: body }, {new: true, runValidators: true})
  .then((user) => {
    if(!user){
      res.json({})
    }
    res.json(user)
  })
  .catch((err) => {
    res.json(err)
  })
}

module.exports.destroy = (req, res) => {
  const id = req.params.id
  User.findOneAndDelete()
  .then((user) => {
    res.json(user)
  })
  .catch((err) => {
    res.json(err)
  })
}
module.exports.getFullname = (req, res) => {
  const id = req.params.id
  User.findById({ _id: id}).exec((err, user) => {
    if (err) {
      res.status('401').json({ message: "Internal Error" });
    }
    res.status('200').json(user.fullName);
  });
}

module.exports.firstName = async (req,res) => {
  const name = req.query.firstname
  console.log(name)
  try{
    console.log(name)
    const data = await User.nameFirst(name)
    console.log(data)
    if(data)
      res.status('200').json(data);
    res.status('404').send('Data Not Present')
  }
  catch(err){
    logger.error(err.message)
  }
}
