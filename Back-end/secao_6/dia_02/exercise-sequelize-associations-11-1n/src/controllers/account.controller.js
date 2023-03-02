const AccountService = require('../services/account.service');

const getById = async (req, res) => {
  const { id } = req.params;
  const account = await AccountService.getById(id);

  if (!account) return res.status(404).json({ message: 'Pessoa colaboradora não encontrada.' });

  return res.status(200).json(account);
};

const getByIdV2 = async (req, res) => {
  const { id } = req.params;
  const account = await AccountService.getByIdV2(id);

  if (!account) return res.status(404).json({ message: 'Pessoa colaboradora não encontrada.' });

  return res.status(200).json(account);
};

module.exports = {
  getById,
  getByIdV2,
}; 
