/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} _DataTypes 
 */

module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define(
    'UserBook',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'users_books',
    },
  );

  return UserBook;
}