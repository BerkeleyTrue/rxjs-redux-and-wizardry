const fs = require('fs');
const path = require('path');
const htmlTemplate = require('./html-template');
const { description } = require('./package.json');

const dist = path.join(__dirname, 'dist');

fs.writeFileSync(
  path.join(dist, 'index.html'),
  htmlTemplate({ title: description })
);
