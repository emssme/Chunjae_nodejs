const fs = require("fs");
//비동기 방식

let content = "bye"
/*
fs.writeFile('./kim2.txt', content, (err) => {
    fs.readFile('./kim2.txt','utf-8',(err, data) => {
        console.log(data);
    });
});


//동기식 
fs.writeFileSync('./kim3.txt', content);
var data = fs.readFileSync('./kim3.txt','utf-8');
console.log(data);
*/

//내용 추가
fs.readFile('./kim2.txt', 'utf-8', (err, data) => {
    let con = data + " 내용추가";
    fs.writeFile('./kim2.txt',con, (err) => {
        console.log(con)
    })
})
