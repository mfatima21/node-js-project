//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
//let Book = require('../app/models/book');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
const { response } = require("express");
const { authorization } = require("../services/auth.service");
let should = chai.should();


chai.use(chaiHttp);

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiTW9uIEF1ZyAwOCAyMDIyIDA0OjQ3OjUxIEdNVCswNTAwIChQYWtpc3RhbiBTdGFuZGFyZCBUaW1lKSIsInVzZXJJZCI6IjYyZWZlZDgxYmM2OWIyZmM5YTg4YWY2ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1OTkxNjA3MX0.UZ4bOfZW5xHTwlcAxdWiNXVzTNwGCnUgN7ENgURcTco"
describe('/testing movies controller ', () => {

    it('Testing Title', (done) => {
      const movies = {
        "title": "",
        "cast": ["62ed3f114ae30f5ef3890e02"],
        "genre": "Action"
      }
      chai.request(server)
          .post('/movies')
          .send(movies)
          .set('authorization','Bearer ' + token)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
    });
    it('Testing Cast array', (done) => {
      const movies = {
        "title": "Shawshank Redemption",
        "cast": "62ed3f114ae30f5ef3890e02",
        "genre": "Action"
      }
      chai.request(server)
          .post('/movies')
          .send(movies)
          .set('authorization','Bearer ' + token)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
    });
    it('Testing Genre', (done) => {
      const movies = {
        "title": "Shawshank Redemption",
        "cast": ["62ed3f114ae30f5ef3890e02"],
        "genre": ""
      }
      chai.request(server)
          .post('/movies')
          .send(movies)
          .set('authorization','Bearer ' + token)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
    });
});
