var fs = require('fs');

fs.writeFile("SohelWrite.txt", "Hello from here", function(err){
    if (err) throw err;

    console.log("Completed writing infotmation");
});

 