const CommentDAL = require("../DAL/comment.dal");
const EventsDAL = require("../DAL/events.dal");

const commentDAL = new CommentDAL;
const eventDAL = new EventsDAL;

const createComment = async (id,username,message) => {
    const event = await eventDAL.getEventById(id);
    if (!event) {
        throw new Error('No se encontro el id del evento');
    }
    const comment = await commentDAL.createComment(username,message);
    event.comment.push(comment);
    await event.save();
}

module.exports = {
    createComment
}
