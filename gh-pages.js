/* eslint-disable no-process-exit */
var path = require('path');
var ghpages = require('gh-pages');

ghpages.publish(
  path.join(__dirname, 'dist'),
  function(err) {
    if (err) { throw err; }
    console.log('Completed');
    process.exit(0);
  }
);
