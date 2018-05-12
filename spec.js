var fs = require('fs');

var date = new Date().toISOString().
replace(/T/, ' ').
replace(/\..+/, '')

fs.writeFile("views/Output.txt", date, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("File is Successfully Created");

});
