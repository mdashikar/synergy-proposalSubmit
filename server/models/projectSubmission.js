var mongoose = require('mongoose');
var moment = require('moment');
const validator = require('validator');
const _ = require('lodash');


var ProjectSubmit = mongoose.model('ProjectSubmit', {
    projectName:{
        type: 'string',
        required: true,
        minLength: 5,
        trim:true
    },
    projectType:{
        type: 'string',
        required: true,
        minLength: 2,
        trim:true
    }, 
    projectTools:{
        type: 'string',
        required: true,
        minLength: 5,
        trim:true
    },
    projectSummary:{
        type: 'string',
        required: true,
        minLength: 100,
        trim:true
    },
    memberName:[{
        type: String,
        required: true,
        minLength: 5,
        trim:true
    }],
    memberEmail:[{
        type:  String,
        required: true,
        minLength: 5,
        unique:true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        },
        trim:true
    }],
    memberId:[{
        type: Number,
        required: true,
        unique: true,
        minLength: 8,
        trim:true
    }],

    createdAt:{
        date: Date
        
    },
    // _creator: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required:true
    // }
});

module.exports = {ProjectSubmit};