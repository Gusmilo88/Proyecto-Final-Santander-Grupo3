const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;