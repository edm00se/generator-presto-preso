Note: This repository is approaching being archived. It is still published to and available on npm's public repository. For the why, consult [issue#73](https://github.com/edm00se/generator-presto-preso/issues/73).

-----------

<div align="center">
<h1>generator-presto-preso</h1>
<pre><code>yo presto-preso</code></pre>
</div>

> yeoman generator to create a reveal.js presentation, live reload preview, websocket state push from controlling endpoint on node server, and static site generation

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][codecov-image]][codecov-url]

## 💻 🖼 🎉

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

## Try With No Install

Run:

```sh
npx -p yo -p generator-presto-preso -c 'yo presto-preso'
```

## Full Installation

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


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/622118?v=4" width="100px;"/><br /><sub>Eric McCormick</sub>](https://ericmccormick.io)<br />[🐛](https://github.com/edm00se/generator-presto-preso/issues?q=author%3Aedm00se "Bug reports") [💻](https://github.com/edm00se/generator-presto-preso/commits?author=edm00se "Code") [🎨](#design-edm00se "Design") [📖](https://github.com/edm00se/generator-presto-preso/commits?author=edm00se "Documentation") [💡](#example-edm00se "Examples") [🤔](#ideas-edm00se "Ideas, Planning, & Feedback") [👀](#review-edm00se "Reviewed Pull Requests") [⚠️](https://github.com/edm00se/generator-presto-preso/commits?author=edm00se "Tests") [🔧](#tool-edm00se "Tools") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

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
