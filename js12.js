const fs = require("fs");

//비동기 방식
fs.readFile('./kim.txt', 'utf-8', function(err, data){
    console.log(data);
    if(err !== undefined){
    console.log(err)
    }
})