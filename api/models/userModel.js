const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema ({
  firstName:{
    type: String
  },
  lastName:{
    type: String
  },
  address:{
    type: String
  },
  DOB:{
    type: Date,
    default: Date.now()
  },
  phoneNo:{
    type: Number,

  }
})

userSchema.methods.getIfBday = function() {
  return this.DOB
};

userSchema.statics.nameFirst = function(name) {
  //Promise
  this.find({firstName : name},callback)
};

// userSchema.statics.nameFirst = new Promise(function (res,rej){
//   cosnt name = 
//   this.find({firstName: name}, (err, user) => {
//     resolve(user)
//     reject(err)
//   })
// })

userSchema.virtual("fullName").get(function() {
  return this.firstName + " " + this.lastName;
});


const User = mongoose.model('User', userSchema)

module.exports = {
  User
}