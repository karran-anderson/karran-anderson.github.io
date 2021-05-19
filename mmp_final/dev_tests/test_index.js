let serialport = require('serialport');// include the library
// get port name from the command line:
let portName = process.argv[2];

var myPort = new SerialPort(portName, 9600);