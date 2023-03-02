const { Comment } = require('../models');

const getCommentByAccountId = async (id) => {
  const comments = await Comment.findAll(
    {
      where: {
        accountId: id,
      },
    },
  );

  return comments;
};

module.exports = {
  getCommentByAccountId,
};
