const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../src/index'); // Asegúrate de que la ruta sea correcta

const { expect } = chai;

describe('API Routes', function() {
  this.timeout(5000); // Aumenta el tiempo de espera a 5000ms

  it('should get all cities', (done) => {
    request(app)
      .get('/api/ciudades')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  // Puedes agregar más pruebas aquí
});