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