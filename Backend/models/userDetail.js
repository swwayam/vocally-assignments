const mongoose = require('mongoose')

const userDetailSchema = new mongoose.Schema({
    name:{
        type: String,
        
    },
    email:{
        type: String,
        
    }
})

module.exports = mongoose.model('userDetail', userDetailSchema)