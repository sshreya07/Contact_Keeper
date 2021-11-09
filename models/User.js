const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name']
    },

    email:{
        type: String,
        required: [true, 'Please add an email'],
        unique:true
    },

    password: {
        type: String,
        required: [true, 'Please add a password'],
        select:false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});


//encrypting password using bcryptjs
UserSchema.pre('save', async function (next) {
    //isModified('field') method
    if(!this.isModified('password')){
      next();
    }
    
    const salt = await bcrypt.genSalt(10);    // 10 is the no of rounds to make strong encryption (but remember the more the no of rounds the more stronger but heavier your app will be )

    this.password = await bcrypt.hash(this.password, salt);

    next();
  });


module.exports = mongoose.model('user', UserSchema);