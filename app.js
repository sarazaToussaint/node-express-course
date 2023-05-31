const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`Data received by ${name} with the id: ${id}`);
})

customEmitter.on('response', () => {
  console.log('This is an other logic');
})

customEmitter.emit('response', 'John', 243)