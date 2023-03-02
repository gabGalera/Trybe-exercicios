/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      message: DataTypes.STRING,
      upvoting: DataTypes.INTEGER,
      downvoting: DataTypes.INTEGER,
      accountId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'Comments',
      underscored: true,
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(
      models.Account,
      { foreignKey: 'accountId', as: 'accounts' }
    );
  };

  return Comment;
}