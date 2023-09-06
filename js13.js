const fs = require("fs");

//동기 방식(readFileSync): 한꺼번에 파일 전체의 내용을 불러올 경우
var syncData = fs.readFileSync('./kim.txt','utf-8')
console.log(`동기방식: ${syncData}`)

//비동기 방식(readFile): 불러온 데이터 중에서 일부만 컨트롤 하는 경우
fs.readFile('./kim.txt','utf-8', function(err,result){
    console.log(`비동기방식: ${result}`)
})