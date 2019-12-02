'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const slug = require('slugify');
const titleCase = require('title-case').titleCase;
const fetch = require('node-fetch');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        'Welcome to the ' +
          chalk.red('presto-preso') +
          ' generator!\n\nBuild a presentation with style and power.'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: slug(this.appname) // Default to current folder name, slugified
      },
      {
        type: 'input',
        name: 'description',
        message: 'A description for this presentation'
      },
      {
        type: 'confirm',
        name: 'usegh',
        message: 'Will you be deploying to GitHub?',
        default: true
      },
      {
        type: 'input',
        name: 'githubname',
        message: 'Your GitHub user name',
        store: true
      },
      {
        when: resp => {
          return resp.usegh;
        },
        type: 'input',
        name: 'projname',
        message:
          'Name of the project on GitHub (e.g.- "some-project" for a project in your username space, or "user/some-project" for a project in a team or other declared username space)',
        default: slug(this.appname)
      },
      {
        when: resp => {
          return !resp.usegh;
        },
        type: 'input',
        name: 'repourl',
        message: 'Your project URL'
      },
      {
        when: resp => {
          return !resp.usegh;
        },
        type: 'input',
        name: 'author',
        message: 'Your name',
        store: true
      },
      {
        when: resp => {
          return !resp.usegh;
        },
        type: 'input',
        name: 'authorurl',
        message: 'Your URL',
        store: true
      },
      {
        type: 'input',
        name: 'license',
        message: 'Your project\'s license',
        default: 'MIT',
        store: true
      },
      {
        type: 'input',
        name: 'twittername',
        message: 'Your twitter handle',
        store: true
      },
      {
        when: resp => {
          return resp.usegh;
        },
        type: 'confirm',
        name: 'ama',
        message: 'Do you have an AMA repo on GitHub?',
        default: false,
        store: true
      }
    ];

    return this.prompt(prompts).then(
      function (props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
      }.bind(this)
    );
  }

  writing() {
    const ctx = this;
    let repoUrl = this.props.repourl;
    let authNm = this.props.author;
    let authUrl = this.props.authorurl;
    let avatarUrl;
    let bio;
    let twitName = this.props.twittername;
    if (this.props.usegh) {
      authNm = this.props.githubname;
      authUrl = 'https://github.com/' + this.props.githubname;
      if (this.props.projname.includes('/')) {
        const tmp = this.props.projname.split('/');
        repoUrl = 'https://github.com/' + tmp[0] + '/' + tmp[1];
      } else {
        repoUrl =
          'https://github.com/' +
          this.props.githubname +
          '/' +
          this.props.projname;
      }

      fetch('https://api.github.com/users/' + this.props.githubname)
        .then(res => res.json())
        .then(ob => {
          /* istanbul ignore else */
          if (ob.blog !== '') {
            authUrl = ob.blog;
          }

          /* istanbul ignore else */
          if (ob.bio !== '') {
            bio = ob.bio;
          }

          /* istanbul ignore else */
          if (ob.name !== '') {
            authNm = ob.name;
          }

          /* istanbul ignore else */
          if (ob.avatar_url !== '') {
            avatarUrl = ob.avatar_url;
          }
        });
    }

    const opts = {
      name: this.props.name,
      pName: titleCase(ctx.props.name),
      tagLine: this.props.description,
      description: this.props.description,
      repoUrl: repoUrl,
      license: this.props.license,
      author: authNm,
      ghName: this.props.githubname,
      bio: bio,
      avatar: avatarUrl,
      twitName: twitName,
      authorUrl: authUrl,
      ama: this.props.ama
    };
    [
      'app.js',
      'LICENSE.md',
      'package.json',
      'package-lock.json',
      'README.md',
      './views/presentation.ejs',
      './views/header.ejs',
      'static-config.js'
    ].forEach(val => {
      ctx.fs.copyTpl(ctx.templatePath(val), ctx.destinationPath(val), opts);
    });
    [
      './views/control.ejs',
      './views/controllerFooter.ejs',
      './views/error.ejs',
      './views/footer.ejs',
      './views/index.ejs',
      './public/',
      './routes/',
      './test/',
      'static-build.js'
    ].forEach(val => {
      ctx.fs.copy(ctx.templatePath(val), ctx.destinationPath(val));
    });
    this.fs.copyTpl(
      this.templatePath('./_editorconfig'),
      this.destinationPath('./.editorconfig'),
      opts
    );
    this.fs.copyTpl(
      this.templatePath('./_gitignore'),
      this.destinationPath('./.gitignore'),
      opts
    );
  }

  install() {
    this.npmInstall();
  }
};
