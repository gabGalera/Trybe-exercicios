const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('Usando o método GET em /chocolates/total', function () {
  it('Retorna o total de chocolates', async function () {
    response = await chai
        .request(app)
        .get('/chocolates/total');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ totalChocolates: 4 });
  });
});

describe('Usando o método GET em /chocolates/search?name=Mo', function () {
  it('Retorna os chocolates filtrados', async function () {
    const output = [
      {
        "id": 3,
        "name": "Mon Chéri",
        "brandId": 2
      },
      {
        "id": 4,
        "name": "Mounds",
        "brandId": 3
      }
    ]
    
    response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(output);
  });
});

describe('Usando o método PUT em /chocolates/:id', function () {
  it('Atualiza um chocolate existente', async function () {

    const response = await chai

      .request(app)

      .put('/chocolates/1').send({

      name: 'Mint Pretty Good',

      brandId: 2,

    });


    expect(response.status).to.be.equal(200);

    expect(response.body.chocolate).to.deep.equal({

      id: 1,

      name: 'Mint Pretty Good',

      brandId: 2,

    });
  })
});