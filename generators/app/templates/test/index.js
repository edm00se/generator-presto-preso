'use strict';

var fs = require('fs');
var path = require('path');
var child = require('child_process');

var chai = require('chai');
var chaiFiles = require('chai-files');
var chaiHttp = require('chai-http');
chai.use(chaiFiles);
chai.use(chaiHttp);

var expect = chai.expect;
var file = chaiFiles.file;
var dir = chaiFiles.dir;

describe('app', function(){

  describe('static presentation', function(){
    it('has a generated an html file in docs/', function(){
      expect(dir('docs')).to.exist;
      expect(file(path.join(__dirname, '../docs/index.html'))).to.exist;
    });
  });

  describe('server presentation', function(done){
    it('should serve successfully', function(){
      chai.request('http://localhost:8080')
        .get('/')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

  });

});
