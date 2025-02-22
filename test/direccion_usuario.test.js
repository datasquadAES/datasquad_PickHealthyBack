const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/index'); // Asegúrate de que la ruta sea correcta
const DireccionUsuario = require('../src/modelo/direccion_usuario'); // Asegúrate de que la ruta sea correcta

const { expect } = chai;

describe('DireccionUsuario Routes', function() {
  this.timeout(5000); // Aumenta el tiempo de espera a 5000ms

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create a new user address', (done) => {
    const newAddress = {
      nomenclatura: 'Calle 123',
      id_ciudad: 1,
      id_usuario: 1
    };

    const createStub = sandbox.stub(DireccionUsuario, 'create').resolves(newAddress);

    request(app)
      .post('/api/direcciones_usuario')
      .send(newAddress)
      .end((err, res) => {
        if (err) return done(err);
        expect(createStub.calledOnce).to.be.true;
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nomenclatura', newAddress.nomenclatura);
        expect(res.body).to.have.property('id_ciudad', newAddress.id_ciudad);
        expect(res.body).to.have.property('id_usuario', newAddress.id_usuario);
        done();
      });
  });

  it('should get all user addresses', (done) => {
    const addresses = [
      { nomenclatura: 'Calle 123', id_ciudad: 1, id_usuario: 1 },
      { nomenclatura: 'Avenida 456', id_ciudad: 2, id_usuario: 2 }
    ];

    const findAllStub = sandbox.stub(DireccionUsuario, 'findAll').resolves(addresses);

    request(app)
      .get('/api/direcciones_usuario')
      .end((err, res) => {
        if (err) return done(err);
        expect(findAllStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        done();
      });
  });

  it('should get a user address by id', (done) => {
    const address = { id: 1, nomenclatura: 'Calle 123', id_ciudad: 1, id_usuario: 1 };

    const findByPkStub = sandbox.stub(DireccionUsuario, 'findByPk').resolves(address);

    request(app)
      .get(`/api/direcciones_usuario/${address.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', address.id);
        expect(res.body).to.have.property('nomenclatura', address.nomenclatura);
        expect(res.body).to.have.property('id_ciudad', address.id_ciudad);
        expect(res.body).to.have.property('id_usuario', address.id_usuario);
        done();
      });
  });

  it('should update a user address by id', (done) => {
    const address = { id: 1, nomenclatura: 'Calle 123', id_ciudad: 1, id_usuario: 1 };
    const updatedAddress = { nomenclatura: 'Avenida 456', id_ciudad: 2, id_usuario: 2 };

    const updateStub = sandbox.stub(DireccionUsuario, 'update').resolves([1]);
    const findByPkStub = sandbox.stub(DireccionUsuario, 'findByPk').resolves(updatedAddress);

    request(app)
      .put(`/api/direcciones_usuario/${address.id}`)
      .send(updatedAddress)
      .end((err, res) => {
        if (err) return done(err);
        expect(updateStub.calledOnce).to.be.true;
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nomenclatura', updatedAddress.nomenclatura);
        expect(res.body).to.have.property('id_ciudad', updatedAddress.id_ciudad);
        expect(res.body).to.have.property('id_usuario', updatedAddress.id_usuario);
        done();
      });
  });

  it('should delete a user address by id', (done) => {
    const address = { id: 1, nomenclatura: 'Calle 123', id_ciudad: 1, id_usuario: 1 };

    const destroyStub = sandbox.stub(DireccionUsuario, 'destroy').resolves(1);

    request(app)
      .delete(`/api/direcciones_usuario/${address.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(destroyStub.calledOnce).to.be.true;
        expect(res.status).to.equal(204);
        done();
      });
  });
});