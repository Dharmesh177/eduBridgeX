const mongoose = require('mongoose')

const resources = new mongoose.Schema({
    
    name: {
        type: String,
        required:true
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    tags: {
        type: [String],
        required:true
    },
    description:{
        type :String,
        required:true
    },
    pdfLink: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('resources', resources);
