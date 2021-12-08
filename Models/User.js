const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    players:{
        type:[String],
        required:true
    },

    teamUsername:String,
    password:String,
    isLogged:Boolean

})

const User = mongoose.model('user',UserSchema)
module.exports = User