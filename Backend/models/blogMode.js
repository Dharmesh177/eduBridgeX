const mongoose = require('mongoose')

const blog = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'mentor'
    },
    date: {
        type: Date,
        default: Date.now,
    },
    tag: {
        type: [String],
        required:true
    },
    like: {
        type: Number,
        required:true
    },
    type: {
        type: String,
        required:true
    },
    feedback: {
        type: [{
            rating: {
                type: Number,
                default :0
            },
            reviews: {
                type: [String],
                default :0
            }
        }]
    }
})
module.exports = mongoose.model('blog', blog);

