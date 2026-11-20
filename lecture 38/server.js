const EventEmitter = require('events');
const emitter = new EventEmitter();

const informStudents=(time) => {
    console.log(`Bell rang at ${time}, Students should come in the class.`);
};

emitter.on("Bell-Rang",informStudents)
// emitter.on("Bell-Rang",informStudents)

// emitter.on('Bell-Rang', () => {
//     console.log('Bell rang, teacher can start the class.node .\server.js');
// });





emitter.emit("Bell-Rang","10:00 AM");
emitter.emit("Bell-Rang","11:00 AM");
// emitter.off('Bell-Rang',informStudents);
emitter.emit("Bell-Rang","12:00 PM");