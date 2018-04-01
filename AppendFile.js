var fs = require('fs');

fs.appendFile("SohelWrite.txt", "\nAppended Info", function(err){
    if (err){
    console.log("Error appending file "+err);
    } else {
        console.log("Successfull append");
    }
});