const { saveFavoriteMagicCard } = require('../magic');

const favoriteCards = require('../data/favoriteCards');

const restoreFavoriteCards = () => { 
  // implemente seu código aqui
  const report = favoriteCards
    .map((e) => e.name);

  favoriteCards.pop();

  return report;
};

jest.setTimeout(10000);

describe('3 - Testes da função saveFavoriteMagicCard', () => {
  afterEach(restoreFavoriteCards);

  it('3.1 Testa se um novo card é adicionado a cada execução', async () => {
    // implemente seus testes aqui
    expect.assertions(1);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length).toBe(5);
  });

  it('3.2 Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(1);
    expect((favoriteCards)).toHaveLength(4);
  });
});

describe('4 - Testes da função saveFavoriteMagicCard', () => {
  it(`4.1 Implemente um teste que verifique que o array que você obteve com o map
  contém todos os quatro nomes iniciais nomes`, async () => {
    // implemente seus testes aqui
    expect.assertions(1);
    const arr = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser'];
    expect(restoreFavoriteCards()).toEqual(arr);
  });
});
