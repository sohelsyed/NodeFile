var fs = require('fs');

// By default Node js reads asynchronously
fs.readFile('Sohel.txt','UTF8', function(err, data){
    console.log(data);
});

console.log('TEST');