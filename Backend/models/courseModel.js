const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        default: 'default image url',
    },
    title: {
        type: String,
        unique: true,
        required: true,
        maxlength: 60
    },
    category: {
        type: [String],
    },
    difficultyLevel: {
        type: String,
    },
    description: {
        type: String,
    },
    whatYouWillLearn: {
        type: [String],
    },
    duration: {
        type: Number,
        required: true
    },
    requirements: {
        type: [String],
    },
    videos: {
        type: String,
        default: 'default main link'
    },
    instructor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);