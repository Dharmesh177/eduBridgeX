const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatMessageSchema = new Schema({
    messageID: {
        type: String,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    userID: {
        type: String,
        require: true
    },
    mentorID: {
        type: String,
        require: true
    }
})