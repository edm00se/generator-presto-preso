# generator-presto-preso [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][codecov-image]][codecov-url]
> yeoman generator to create a reveal.js presentation, the @edm00se way

## 🎉 💻 🖼

- a [reveal.js](http://lab.hakim.se/reveal-js/) slide deck
- static site generation
  - to `docs/` for convenient hosting on [GitHub Pages](https://pages.github.com/)
- serves via Node
  - for convenient serving of the slide deck
  - in an EJS template
  - with a viewer and a controller endpoint (`/control`)
  - the controller pushes slide state to the viewers via web socket connection
- prefills with user's GitHub info
  - or directly input information
- live-reload local dev server
  - watches `views/`, such as `views/presentation.ejs`

## Installation

First, install [Yeoman](http://yeoman.io) and generator-presto-preso using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-presto-preso
```

Then generate your new project:

```bash
yo presto-preso
```

### Using the Project

- `npm run dev`
- edit the `views/presentation.ejs` file
- preview in your browser as you work

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Eric McCormick](https://ericmccormick.io/)


[npm-image]: https://badge.fury.io/js/generator-presto-preso.svg
[npm-url]: https://npmjs.org/package/generator-presto-preso
[travis-image]: https://travis-ci.org/edm00se/generator-presto-preso.svg?branch=master
[travis-url]: https://travis-ci.org/edm00se/generator-presto-preso
[daviddm-image]: https://david-dm.org/edm00se/generator-presto-preso.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/edm00se/generator-presto-preso
[codecov-image]: https://codecov.io/github/edm00se/generator-presto-preso/coverage.svg
[codecov-url]: https://codecov.io/github/edm00se/generator-presto-preso
