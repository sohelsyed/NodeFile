var fs = require('fs');

console.log('Reading Synchronously');
var data = fs.readFileSync('Sohel.txt','UTF8');
console.log(data);
console.log('Reading Synchronously complete');