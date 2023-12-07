const mongoose = require('mongoose')
const mentorModel = require('./mentorModel')

const feedBack = new mongoose.Schema({
    
    followers: {
        type: Number,
        required:true
    },
    industry: {
        type: [String],
        required: true,
    },
    domain: {
        type: [String],
        required:true
    },
    feedbacks: {
        type: [{
            domain: [{
                rating: {
                    type: Number,
                },
                review: {
                    type: String,
                }
            }]
        }]
    }
})

module.exports = mongoose.model('feedBack', feedBack);