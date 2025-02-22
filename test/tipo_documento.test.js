const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/index'); // Asegúrate de que la ruta sea correcta
const TipoDocumento = require('../src/modelo/tipo_documento'); // Asegúrate de que la ruta sea correcta

const { expect } = chai;

describe('TipoDocumento Routes', function() {
  this.timeout(5000); // Aumenta el tiempo de espera a 5000ms

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create a new document type', (done) => {
    const newDocumentType = {
      nombre: 'New Document Type',
      sigla: 'NDT'
    };

    const createStub = sandbox.stub(TipoDocumento, 'create').resolves(newDocumentType);

    request(app)
      .post('/api/tipos_documento')
      .send(newDocumentType)
      .end((err, res) => {
        if (err) return done(err);
        expect(createStub.calledOnce).to.be.true;
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nombre', newDocumentType.nombre);
        expect(res.body).to.have.property('sigla', newDocumentType.sigla);
        done();
      });
  });

  it('should get all document types', (done) => {
    const documentTypes = [
      { nombre: 'Document Type 1', sigla: 'DT1' },
      { nombre: 'Document Type 2', sigla: 'DT2' }
    ];

    const findAllStub = sandbox.stub(TipoDocumento, 'findAll').resolves(documentTypes);

    request(app)
      .get('/api/tipos_documento')
      .end((err, res) => {
        if (err) return done(err);
        expect(findAllStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        done();
      });
  });

  it('should get a document type by id', (done) => {
    const documentType = { id: 1, nombre: 'Test Document Type', sigla: 'TDT' };

    const findByPkStub = sandbox.stub(TipoDocumento, 'findByPk').resolves(documentType);

    request(app)
      .get(`/api/tipos_documento/${documentType.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', documentType.id);
        expect(res.body).to.have.property('nombre', documentType.nombre);
        expect(res.body).to.have.property('sigla', documentType.sigla);
        done();
      });
  });

  it('should update a document type by id', (done) => {
    const documentType = { id: 1, nombre: 'Test Document Type', sigla: 'TDT' };
    const updatedDocumentType = { nombre: 'Updated Document Type', sigla: 'UDT' };

    const updateStub = sandbox.stub(TipoDocumento, 'update').resolves([1]);
    const findByPkStub = sandbox.stub(TipoDocumento, 'findByPk').resolves(updatedDocumentType);

    request(app)
      .put(`/api/tipos_documento/${documentType.id}`)
      .send(updatedDocumentType)
      .end((err, res) => {
        if (err) return done(err);
        expect(updateStub.calledOnce).to.be.true;
        expect(findByPkStub.calledOnce).to.be.true;
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nombre', updatedDocumentType.nombre);
        expect(res.body).to.have.property('sigla', updatedDocumentType.sigla);
        done();
      });
  });

  it('should delete a document type by id', (done) => {
    const documentType = { id: 1, nombre: 'Test Document Type', sigla: 'TDT' };

    const destroyStub = sandbox.stub(TipoDocumento, 'destroy').resolves(1);

    request(app)
      .delete(`/api/tipos_documento/${documentType.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(destroyStub.calledOnce).to.be.true;
        expect(res.status).to.equal(204);
        done();
      });
  });
});