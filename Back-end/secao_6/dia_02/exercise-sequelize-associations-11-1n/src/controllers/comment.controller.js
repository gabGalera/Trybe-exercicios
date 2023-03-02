const CommentService = require('../services/comment.service');

const getCommentByAccountId = async (req, res) => {
  const { id } = req.params;
  const comments = await CommentService.getCommentByAccountId(id);
  
  console.log(comments);

  if (!comments.length) return res.status(404).json({ message: 'Nenhum comentário cadastrado.' });
  
  return res.status(200).json({ comments });
};

module.exports = {
  getCommentByAccountId,
};