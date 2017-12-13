'use strict';

const fs = require('fs');
const path = require('path');
const child = require('child_process');

const chai = require('chai');
const chaiFiles = require('chai-files');
const chaiHttp = require('chai-http');
chai.use(chaiFiles);
chai.use(chaiHttp);

const expect = chai.expect;
const file = chaiFiles.file;
const dir = chaiFiles.dir;

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
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
