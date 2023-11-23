const CommentService = require('../Services/comment.services');

const createComment = async (req,res) => {
    try {
        let id = req.params.id;
        let username = req.user.username;
        let {message} = req.body;
        await CommentService.createComment(id,username,message);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    createComment
}