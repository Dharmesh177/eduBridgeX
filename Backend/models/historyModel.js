const mongoose = require('mongoose')

const history = new mongoose.Schema({
    id: {
        type: String,
        required:true
    },
    sessionTaken: {
        type: String,
        required:true
    },
    domain: {
        type: String,
        required:true
    },
    time: {
        type: Date,
        required:true
    },
    duration: {
        type: String,
        required:true
    },
    with: {
        type: String,
        required:true
    },
    reviews: {
        feedback: {
            type: String,
        },
        rating: {
            type: Number,
            required:true
        }
    }
})

module.exports = mongoose.model('history', history)
