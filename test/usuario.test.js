const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/index'); // Asegúrate de que la ruta sea correcta
const Usuario = require('../src/modelo/usuario'); // Asegúrate de que la ruta sea correcta

const { expect } = chai;

describe('Usuario Routes', function() {
  this.timeout(5000); // Aumenta el tiempo de espera a 5000ms

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create a new user', (done) => {
    const newUser = {
      nombre1: 'John',
      nombre2: 'Doe',
      apellido1: 'Smith',
      apellido2: 'Johnson',
      username: 'johnsmith',
      numero_identificacion: '123456789',
      id_tipo_identificacion: 1,
      id_tipo_usuario: 1,
      correo_electronico: 'john@example.com',
      password: 'password123',
      estado_usuario: 'activo'
    };

    const createStub = sandbox.stub(Usuario, 'create').resolves(newUser);

    request(app)
      .post('/api/usuarios')
      .send(newUser)
      .end((err, res) => {
        if (err) return done(err);
        expect(createStub.calledOnce).to.be.true;
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nombre1', newUser.nombre1);
        expect(res.body).to.have.property('nombre2', newUser.nombre2);
        expect(res.body).to.have.property('apellido1', newUser.apellido1);
        expect(res.body).to.have.property('apellido2', newUser.apellido2);
        expect(res.body).to.have.property('username', newUser.username);
        expect(res.body).to.have.property('numero_identificacion', newUser.numero_identificacion);
        expect(res.body).to.have.property('id_tipo_identificacion', newUser.id_tipo_identificacion);
        expect(res.body).to.have.property('id_tipo_usuario', newUser.id_tipo_usuario);
        expect(res.body).to.have.property('correo_electronico', newUser.correo_electronico);
        expect(res.body).to.have.property('password', newUser.password);
        expect(res.body).to.have.property('estado_usuario', newUser.estado_usuario);
        done();
      });
  });

  it('should get all users', (done) => {
    const users = [
      { nombre1: 'John', nombre2: 'Doe', apellido1: 'Smith', apellido2: 'Johnson', username: 'johnsmith', numero_identificacion: '123456789', id_tipo_identificacion: 1, id_tipo_usuario: 1, correo_electronico: 'john@example.com', password: 'password123', estado_usuario: 'activo' },
      { nombre1: 'Jane', nombre2: 'Doe', apellido1: 'Smith', apellido2: 'Johnson', username: 'janesmith', numero_identificacion: '987654321', id_tipo_identificacion: 2, id_tipo_usuario: 2, correo_electronico: 'jane@example.com', password: 'password123', estado_usuario: 'activo' }
    ];

    const findAllStub = sandbox.stub(Usuario, 'findAll').resolves(users);

    request(app)
      .get('/api/usuarios')
      .end((err, res) => {
        if (err) return done(err);
        expect(findAllStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        done();
      });
  });

  it('should get a user by id', (done) => {
    const user = { id: 1, nombre1: 'John', nombre2: 'Doe', apellido1: 'Smith', apellido2: 'Johnson', username: 'johnsmith', numero_identificacion: '123456789', id_tipo_identificacion: 1, id_tipo_usuario: 1, correo_electronico: 'john@example.com', password: 'password123', estado_usuario: 'activo' };

    const findByPkStub = sandbox.stub(Usuario, 'findByPk').resolves(user);

    request(app)
      .get(`/api/usuarios/${user.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', user.id);
        expect(res.body).to.have.property('nombre1', user.nombre1);
        expect(res.body).to.have.property('nombre2', user.nombre2);
        expect(res.body).to.have.property('apellido1', user.apellido1);
        expect(res.body).to.have.property('apellido2', user.apellido2);
        expect(res.body).to.have.property('username', user.username);
        expect(res.body).to.have.property('numero_identificacion', user.numero_identificacion);
        expect(res.body).to.have.property('id_tipo_identificacion', user.id_tipo_identificacion);
        expect(res.body).to.have.property('id_tipo_usuario', user.id_tipo_usuario);
        expect(res.body).to.have.property('correo_electronico', user.correo_electronico);
        expect(res.body).to.have.property('password', user.password);
        expect(res.body).to.have.property('estado_usuario', user.estado_usuario);
        done();
      });
  });

  it('should update a user by id', (done) => {
    const user = { id: 1, nombre1: 'John', nombre2: 'Doe', apellido1: 'Smith', apellido2: 'Johnson', username: 'johnsmith', numero_identificacion: '123456789', id_tipo_identificacion: 1, id_tipo_usuario: 1, correo_electronico: 'john@example.com', password: 'password123', estado_usuario: 'activo' };
    const updatedUser = { nombre1: 'John', nombre2: 'Doe', apellido1: 'Smith', apellido2: 'Johnson', username: 'johnsmith', numero_identificacion: '123456789', id_tipo_identificacion: 1, id_tipo_usuario: 1, correo_electronico: 'john@example.com', password: 'newpassword123', estado_usuario: 'activo' };

    const updateStub = sandbox.stub(Usuario, 'update').resolves([1]);
    const findByPkStub = sandbox.stub(Usuario, 'findByPk').resolves(updatedUser);

    request(app)
      .put(`/api/usuarios/${user.id}`)
      .send(updatedUser)
      .end((err, res) => {
        if (err) return done(err);
        expect(updateStub.calledOnce).to.be.true;
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nombre1', updatedUser.nombre1);
        expect(res.body).to.have.property('nombre2', updatedUser.nombre2);
        expect(res.body).to.have.property('apellido1', updatedUser.apellido1);
        expect(res.body).to.have.property('apellido2', updatedUser.apellido2);
        expect(res.body).to.have.property('username', updatedUser.username);
        expect(res.body).to.have.property('numero_identificacion', updatedUser.numero_identificacion);
        expect(res.body).to.have.property('id_tipo_identificacion', updatedUser.id_tipo_identificacion);
        expect(res.body).to.have.property('id_tipo_usuario', updatedUser.id_tipo_usuario);
        expect(res.body).to.have.property('correo_electronico', updatedUser.correo_electronico);
        expect(res.body).to.have.property('password', updatedUser.password);
        expect(res.body).to.have.property('estado_usuario', updatedUser.estado_usuario);
        done();
      });
  });

  it('should delete a user by id', (done) => {
    const user = { id: 1, nombre1: 'John', nombre2: 'Doe', apellido1: 'Smith', apellido2: 'Johnson', username: 'johnsmith', numero_identificacion: '123456789', id_tipo_identificacion: 1, id_tipo_usuario: 1, correo_electronico: 'john@example.com', password: 'password123', estado_usuario: 'activo' };

    const destroyStub = sandbox.stub(Usuario, 'destroy').resolves(1);

    request(app)
      .delete(`/api/usuarios/${user.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(destroyStub.calledOnce).to.be.true;
        expect(res.status).to.equal(204);
        done();
      });
  });
});