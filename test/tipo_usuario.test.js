const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/index'); // Asegúrate de que la ruta sea correcta
const TipoUsuario = require('../src/modelo/tipo_usuario'); // Asegúrate de que la ruta sea correcta

const { expect } = chai;

describe('TipoUsuario Routes', function() {
  this.timeout(5000); // Aumenta el tiempo de espera a 5000ms

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create a new user type', (done) => {
    const newUserType = {
      nombre: 'New User Type',
      descripcion: 'Description of new user type'
    };

    const createStub = sandbox.stub(TipoUsuario, 'create').resolves(newUserType);

    request(app)
      .post('/api/tipos_usuario')
      .send(newUserType)
      .end((err, res) => {
        if (err) return done(err);
        expect(createStub.calledOnce).to.be.true;
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nombre', newUserType.nombre);
        expect(res.body).to.have.property('descripcion', newUserType.descripcion);
        done();
      });
  });

  it('should get all user types', (done) => {
    const userTypes = [
      { nombre: 'User Type 1', descripcion: 'Description 1' },
      { nombre: 'User Type 2', descripcion: 'Description 2' }
    ];

    const findAllStub = sandbox.stub(TipoUsuario, 'findAll').resolves(userTypes);

    request(app)
      .get('/api/tipos_usuario')
      .end((err, res) => {
        if (err) return done(err);
        expect(findAllStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        done();
      });
  });

  it('should get a user type by id', (done) => {
    const userType = { id: 1, nombre: 'Test User Type', descripcion: 'Test Description' };

    const findByPkStub = sandbox.stub(TipoUsuario, 'findByPk').resolves(userType);

    request(app)
      .get(`/api/tipos_usuario/${userType.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', userType.id);
        expect(res.body).to.have.property('nombre', userType.nombre);
        expect(res.body).to.have.property('descripcion', userType.descripcion);
        done();
      });
  });

  it('should update a user type by id', (done) => {
    const userType = { id: 1, nombre: 'Test User Type', descripcion: 'Test Description' };
    const updatedUserType = { nombre: 'Updated User Type', descripcion: 'Updated Description' };

    const updateStub = sandbox.stub(TipoUsuario, 'update').resolves([1]);
    const findByPkStub = sandbox.stub(TipoUsuario, 'findByPk').resolves(updatedUserType);

    request(app)
      .put(`/api/tipos_usuario/${userType.id}`)
      .send(updatedUserType)
      .end((err, res) => {
        if (err) return done(err);
        expect(updateStub.calledOnce).to.be.true;
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nombre', updatedUserType.nombre);
        expect(res.body).to.have.property('descripcion', updatedUserType.descripcion);
        done();
      });
  });

  it('should delete a user type by id', (done) => {
    const userType = { id: 1, nombre: 'Test User Type', descripcion: 'Test Description' };

    const destroyStub = sandbox.stub(TipoUsuario, 'destroy').resolves(1);

    request(app)
      .delete(`/api/tipos_usuario/${userType.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(destroyStub.calledOnce).to.be.true;
        expect(res.status).to.equal(204);
        done();
      });
  });
});