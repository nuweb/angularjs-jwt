/***** IMPORTANT: ONLY ES5 CODE ALLOWED BELOW! *****/

//	enable runtime transpilation to use ES6/7 in node
const fs = require('fs');
const path = require('path');

try {
  const babelrc = fs.readFileSync(path.resolve(__dirname, '../.babelrc'));
  const config = JSON.parse(babelrc);
  require('babel-core/register')(config);
} catch(err) {
  console.log('Error parsing your .babelrc');
  console.error(err);
}



require('../lib');
