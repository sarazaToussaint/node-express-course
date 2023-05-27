const { country, city } = require('./4-names');
const sayHello = require('./5-utils');
const data = require('./alternative');
require('./6-invokedModule')

// console.log(data);
// sayHello('Toussaint');
// sayHello(country);
// sayHello(city);


// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)