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
  return this.DOB == Date.now;
};

userSchema.static.birthday = function(id, DOB) {
  const User = this
  User.find({id})
  .then(user => {
    if(!user){
      Promise.reject('error')
    }
    if(DOB == User.DOB){
      Promise.resolve(true)
    }else{
      Promise.reject(false)
    }
  })
};

userSchema.virtual("fullName").get(function() {
  return this.firstName + " " + this.lastName;
});


const User = mongoose.model('User', userSchema)

module.exports = {
  User
}