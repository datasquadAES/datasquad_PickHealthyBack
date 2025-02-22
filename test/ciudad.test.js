const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/index'); // Asegúrate de que la ruta sea correcta
const Ciudad = require('../src/modelo/ciudad'); // Asegúrate de que la ruta sea correcta

const { expect } = chai;

describe('Ciudad Routes', function() {
  this.timeout(6000); // Aumenta el tiempo de espera a 6000ms

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create a new city', (done) => {
    const newCity = {
      nombre: 'New City',
      id_pais: 1
    };

    const createStub = sandbox.stub(Ciudad, 'create').resolves(newCity);

    request(app)
      .post('/api/ciudades')
      .send(newCity)
      .end((err, res) => {
        if (err) return done(err);
        expect(createStub.calledOnce).to.be.true;
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nombre', newCity.nombre);
        expect(res.body).to.have.property('id_pais', newCity.id_pais);
        done();
      });
  });

  it('should get all cities', (done) => {
    const cities = [
      { nombre: 'City1', id_pais: 1 },
      { nombre: 'City2', id_pais: 2 }
    ];

    const findAllStub = sandbox.stub(Ciudad, 'findAll').resolves(cities);

    request(app)
      .get('/api/ciudades')
      .end((err, res) => {
        if (err) return done(err);
        expect(findAllStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        done();
      });
  });

  it('should get a city by id', (done) => {
    const city = { id: 1, nombre: 'Test City', id_pais: 1 };

    const findByPkStub = sandbox.stub(Ciudad, 'findByPk').resolves(city);

    request(app)
      .get(`/api/ciudades/${city.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', city.id);
        expect(res.body).to.have.property('nombre', city.nombre);
        expect(res.body).to.have.property('id_pais', city.id_pais);
        done();
      });
  });

  it('should update a city by id', (done) => {
    const city = { id: 1, nombre: 'Test City', id_pais: 1 };
    const updatedCity = { nombre: 'Updated City', id_pais: 2 };

    const updateStub = sandbox.stub(Ciudad, 'update').resolves([1]);
    const findByPkStub = sandbox.stub(Ciudad, 'findByPk').resolves(updatedCity);

    request(app)
      .put(`/api/ciudades/${city.id}`)
      .send(updatedCity)
      .end((err, res) => {
        if (err) return done(err);
        expect(updateStub.calledOnce).to.be.true;
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nombre', updatedCity.nombre);
        expect(res.body).to.have.property('id_pais', updatedCity.id_pais);
        done();
      });
  });

  it('should delete a city by id', (done) => {
    const city = { id: 1, nombre: 'Test City', id_pais: 1 };

    const destroyStub = sandbox.stub(Ciudad, 'destroy').resolves(1);

    request(app)
      .delete(`/api/ciudades/${city.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(destroyStub.calledOnce).to.be.true;
        expect(res.status).to.equal(204);
        done();
      });
  });
});