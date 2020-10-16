const mongoose = require('mongoose');
const UniqueValidator = require('mongoose-unique-validator');
const SchemaUser = mongoose.Schema({

    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,require:true
    }
});

SchemaUser.pluggin(UniqueValidator);

module.exports = mongoose.model('User',SchemaUser);