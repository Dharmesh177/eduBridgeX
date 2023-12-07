const mongoose = require('mongoose')

const event = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'mentor'
    },
    speaker: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'mentor'
    },
    time: {
        type: Date,
        default: Date.now,
    },
    duration: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    updatedAt: { type: Date }
}, { timestamps: true })

module.exports = mongoose.model('event', event)
