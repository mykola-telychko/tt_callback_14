const EventEmitter = require('events');

// event obj
const eventEmitter = new EventEmitter();

// subscribe on event
eventEmitter.on('customEvent', (data) => {
    console.log('Received customEvent with data:', data);
});

// call event
eventEmitter.emit('customEvent', { message: 'Hello, world!' });
