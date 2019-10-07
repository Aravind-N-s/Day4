const {User} = require('../models/userModel')
module.exports.list = (req,res) => {
    User.find().sort({createdAt: -1})
    .then((users) => {
        res.json(users)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.create = (req,res) =>{
    const body = req.body
    const user = new User(body)
    user.user = user._id
    user.save()
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
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

module.exports.getIfBday = (req,res) => {
  User.birthday(Date.now,function(err, data) {
    if(err)
      return res.status(401).json(err)
    res.json({data})
  })
}

// module.exports.getByLastName = (req, res) => {
//   // It was earlier defined as a static method inside methods/index.js
//   User.findByLastName("Ch", function(err, data) {
//     if (err)
//       return res
//         .status(HttpStatus.BAD_REQUEST)
//         .json({ message: "Lastname Mismatch" });
//     res.status(HttpStatus.OK).json({ data });
//   });
// };