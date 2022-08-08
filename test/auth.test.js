process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
const { response } = require("express");
const { authorization } = require("../services/auth.service");
let should = chai.should();


chai.use(chaiHttp);

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiTW9uIEF1ZyAwOCAyMDIyIDA0OjQ3OjUxIEdNVCswNTAwIChQYWtpc3RhbiBTdGFuZGFyZCBUaW1lKSIsInVzZXJJZCI6IjYyZWZlZDgxYmM2OWIyZmM5YTg4YWY2ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1OTkxNjA3MX0.UZ4bOfZW5xHTwlcAxdWiNXVzTNwGCnUgN7ENgURcTco"
describe('/testing movies controller ', () => {
    it('it should GET all the User', (done) => {
      const userdata = {
          "email": "umertayyeb223@gmail.com",
          "password": "1122"
      }
      chai.request(server)
          .get('/login')
          .send(userdata)
          .end((err, res) => {
            res.should.have.status(401);
            done();
          });
    });
    it('it should GET all the User', (done) => {
      const userdata = {
          "email": "umertayyeb4545454223@gmail.com",
          "password": "1122"
      }
      chai.request(server)
          .get('/login')
          .send(userdata)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
    });
    it('it should GET all the User', (done) => {
      const userdata = {
          "email": "",
          "password": "1122"
      }
      chai.request(server)
          .get('/login')
          .send(userdata)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
    });
    it('it should GET all the User', (done) => {
      const userdata = {
          "email": "umertayyeb4545454223@gmail.com",
          "password": ""
      }
      chai.request(server)
          .get('/login')
          .send(userdata)
          .end((err, res) => {
            console.log(res)
            res.should.have.status(400);
            done();
          });
    });
    it('it should GET all the User', (done) => {
      const userdata = {
          "email": "",
          "password": ""
      }
      chai.request(server)
          .get('/login')
          .send(userdata)
          .end((err, res) => {
            console.log(res)
            res.should.have.status(400);
            done();
          });
    });
  });