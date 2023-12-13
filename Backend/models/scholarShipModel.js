const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    question: {
        type: [String],
        required: true,
    },
    answer: {
        type: String,
        required: true,
    }
});

const scholarSchipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    docRequired: {
        type: [String],
        required: true,
        default: [],
    },
    eligibility: {
        type: [String],
        required: true,
        default: [],
    },
    benifits: {
        type: String,
    },
    organization: {
        type: String,
        required: true,
    },
    steps: {
        type: [String],
        required: true,
    },
    FAQ: {
        type: [faqSchema],
    },
    reference: {
        type: String,
    },
    tags: {
        type: [String],
    },
    type: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('scholerShip', scholarSchipSchema);