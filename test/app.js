'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-presto-preso', function () {
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
        'test/index.js',
        'public/components/reveal.js/js/reveal.js'
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
        'test/index.js',
        'public/components/reveal.js/js/reveal.js'
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
        'test/index.js',
        'public/components/reveal.js/js/reveal.js'
      ]);
    });
  });
});
