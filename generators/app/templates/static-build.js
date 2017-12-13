const fse = require('fs-extra');
const path = require('path');
const { promisify } = require('util');
const ejsRenderFile = promisify(require('ejs').renderFile);
const globP = promisify(require('glob'));
const rimrafP = promisify(require('rimraf'));
const config = require('./static-config.js');

const srcPath = './src';
const distDirName = 'docs';
const distPath = './docs';

// clear destination folder
rimrafP(path.join(__dirname, distDirName, 'index.html')).then(() => {
  // copy assets?

  const rootFileName = path.join(__dirname, 'views', 'index.ejs');
  const fileData = path.parse(rootFileName); // path.parse(file)
  const destPath = path.join(distPath);

  // create destination directory
  fse
    .mkdirs(destPath)
    .then(() => {
      // render page
      return ejsRenderFile(rootFileName, Object.assign({}, config));
    })
    .then(layoutContent => {
      // save the html file
      fse.writeFile(`${destPath}/${fileData.name}.html`, layoutContent);
    })
    .catch(err => {
      console.error(err);
    });
});
