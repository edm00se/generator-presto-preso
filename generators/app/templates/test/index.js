'use strict';

var path = require('path');
var chai = require('chai');
var chaiFiles = require('chai-files');
var chaiHttp = require('chai-http');
chai.use(chaiFiles);
chai.use(chaiHttp);
var expect = chai.expect;
var file = chaiFiles.file;
var dir = chaiFiles.dir;

const server = require('../app');

describe('app', () => {
  describe('static presentation', () => {
    it('has a generated an html file in docs/', () => {
      expect(dir('docs')).to.exist;
      expect(file(path.join(__dirname, '../docs/index.html'))).to.exist;
    });
  });

  describe('server presentation', done => {
    it('should serve successfully', () => {
      chai.request(server).get('/').end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
  });
});
