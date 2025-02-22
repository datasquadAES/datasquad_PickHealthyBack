const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/index'); // Asegúrate de que la ruta sea correcta
const Pais = require('../src/modelo/pais'); // Asegúrate de que la ruta sea correcta

const { expect } = chai;

describe('Pais Routes', function() {
  this.timeout(5000); // Aumenta el tiempo de espera a 5000ms

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create a new country', (done) => {
    const newCountry = {
      nombre: 'New Country'
    };

    const createStub = sandbox.stub(Pais, 'create').resolves(newCountry);

    request(app)
      .post('/api/paises')
      .send(newCountry)
      .end((err, res) => {
        if (err) return done(err);
        expect(createStub.calledOnce).to.be.true;
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nombre', newCountry.nombre);
        done();
      });
  });

  it('should get all countries', (done) => {
    const countries = [
      { nombre: 'Country1' },
      { nombre: 'Country2' }
    ];

    const findAllStub = sandbox.stub(Pais, 'findAll').resolves(countries);

    request(app)
      .get('/api/paises')
      .end((err, res) => {
        if (err) return done(err);
        expect(findAllStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        done();
      });
  });

  it('should get a country by id', (done) => {
    const country = { id: 1, nombre: 'Test Country' };

    const findByPkStub = sandbox.stub(Pais, 'findByPk').resolves(country);

    request(app)
      .get(`/api/paises/${country.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', country.id);
        expect(res.body).to.have.property('nombre', country.nombre);
        done();
      });
  });

  it('should update a country by id', (done) => {
    const country = { id: 1, nombre: 'Test Country' };
    const updatedCountry = { nombre: 'Updated Country' };

    const updateStub = sandbox.stub(Pais, 'update').resolves([1]);
    const findByPkStub = sandbox.stub(Pais, 'findByPk').resolves(updatedCountry);

    request(app)
      .put(`/api/paises/${country.id}`)
      .send(updatedCountry)
      .end((err, res) => {
        if (err) return done(err);
        expect(updateStub.calledOnce).to.be.true;
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nombre', updatedCountry.nombre);
        done();
      });
  });

  it('should delete a country by id', (done) => {
    const country = { id: 1, nombre: 'Test Country' };

    const destroyStub = sandbox.stub(Pais, 'destroy').resolves(1);

    request(app)
      .delete(`/api/paises/${country.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(destroyStub.calledOnce).to.be.true;
        expect(res.status).to.equal(204);
        done();
      });
  });
});