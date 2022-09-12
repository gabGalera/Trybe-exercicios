// const { getMagicCard } = require('../magic');
// require('../../startest/mockSetup');

const { getMagicCard } = require('../magic');

jest.setTimeout(10000);

describe('1 - Testes da função getMagicCard', () => {
  it('1.1 Verifique se getMagicCard é uma função.', async () => {
    // implemente seus testes aqui
    const response = getMagicCard;  
    expect(typeof response).toBe('function');
  });

  it('1.2 Verifique se a função fetch foi chamada.', async () => {
    // implemente seus testes aqui
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();
  });

  it('1.3 Verifique se a função fetch foi chamada com o endpoint correto', async () => {
    // implemente seus testes aqui
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith('https://api.magicthegathering.io/v1/cards/130550');
  });
});

describe('2 - Testando o retorno da função getMagicCard', () => {
  it('2.1 Verifique se a carta retornada possui o nome Ancestor\'s Chosen.', async () => {
    // implemente seus testes aqui
    const response = await getMagicCard('130550');
    expect(response.name).toBe('Ancestor\'s Chosen');
  });
});
