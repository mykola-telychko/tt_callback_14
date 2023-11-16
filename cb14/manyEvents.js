const EventEmitter = require('events');

// In this example:
// > We create a custom CustomEmitter class that extends EventEmitter.
// > An instance of this emitter (customEmitter) is created.
// > Multiple callbacks are subscribed to the same event (customEvent).
// > When the event is emitted, all subscribed callbacks are invoked.

class myCustomEmitter extends EventEmitter {}

// Create an instance of the custom emitter
const customEmitter = new myCustomEmitter();

// Subscribe to the 'customEvent' event with multiple callbacks
customEmitter.on('customEvent', (data) => {
    console.log('Callback_1 -> Received cusEvent with data:', data);
});

customEmitter.on('customEvent', (data) => {
    console.log('Callback_2 -> Received cusEvent with data:', data, {name: 'Joe'});
});

customEmitter.on('customEvent', () => {
    console.log('Callback_3 -> Received cusEvent without data');
});

// Emit the 'customEvent' event
customEmitter.emit('customEvent', { message: 'here finally text!' });
