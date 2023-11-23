const Comment = require('../Models/Comment');

class CommentDAL{
    async createComment(username,message){
        return new Comment({username,message}).save();
    }
}

module.exports = CommentDAL;