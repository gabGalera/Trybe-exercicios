const { Account, Profile } = require('../models');

const getById = async (id) => {
  const account = await Account.findOne({
    where: { id },
    include: [
      { model: Profile, as: 'profiles' },
    ],
  });

  return account;
};

const getByIdV2 = async (id) => {
  const account = await Account.findOne({
    where: { id },
  });

  return account;
};

module.exports = {
  getById,
  getByIdV2,
};