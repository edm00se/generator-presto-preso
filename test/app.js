'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const ONE_SECOND = 1000;

describe('generator-presto-preso', function () {
  this.timeout(10 * ONE_SECOND);
  describe('github flavored - my namespace', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          name: 'demo-preso',
          description: 'some demo preso',
          usegh: true,
          githubname: 'edm00se',
          projname: 'demo-preso',
          license: 'MIT',
          twittername: 'edm00se',
          ama: true
        })
        .toPromise();
    });

    it('creates required files', function () {
      assert.file([
        'views/presentation.ejs',
        'app.js',
        'package.json',
        'Gruntfile.js',
        'README.md',
        'routes/index.js',
        'test/index.js'
      ]);
    });
  });
  describe('github flavored - team namespace', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          name: 'demo-preso',
          description: 'some demo preso',
          usegh: true,
          githubname: 'edm00se',
          projname: 'TeamMcCormick/demo-preso',
          license: 'MIT',
          twittername: 'edm00se',
          ama: true
        })
        .toPromise();
    });

    it('creates required files', function () {
      assert.file([
        'views/presentation.ejs',
        'app.js',
        'package.json',
        'Gruntfile.js',
        'README.md',
        'routes/index.js',
        'test/index.js'
      ]);
    });
  });
  describe('bitbucket flavored', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          name: 'demo-preso',
          description: 'some demo preso',
          usegh: false,
          repourl: 'https://bitbucket.com/edm00se/demo-preso',
          author: 'Eric McCormick',
          license: 'MIT',
          twittername: 'edm00se',
          authorurl: 'https://ericmccormick.io/',
          ama: true
        })
        .toPromise();
    });

    it('creates required files', function () {
      assert.file([
        'views/presentation.ejs',
        'app.js',
        'package.json',
        'Gruntfile.js',
        'README.md',
        'routes/index.js',
        'test/index.js'
      ]);
    });
  });
});
