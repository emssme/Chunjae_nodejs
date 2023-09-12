const dbCon = require("./model/sample.js");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
let title = "";
let tmp1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>샘플</title>
</head>
<body>
    <ul>
        <li><a href="/list">목록</a></li>
        <li><a href="/sampleInsert">샘플 추가</a></li>
    </ul>
    <hr>
`;
let tmp2 = `</body>
</html>`;
let updateTmp1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Sample</title>
</head>
<body>
    <ul>
        <li><a href="/list">목록</a></li>
        <li><a href="/sampleInsert">샘플 추가</a></li>
    </ul>
    <form action="/sampleUpdatePro" method="post">`;
let updateTmp2 = `<p><input type="submit"></p>
</form>
</body>
</html>`;

//샘플 메인
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/sampleMain.html");
});

//샘플 목록
app.get('/list', (req, res) => {
    title = `<h2>샘플 항목</h2>`;
    let li = `<ul>`;
    dbCon.getSampleList()
        .then((rows) => {
            rows.forEach((row) => {
                li = li + `<li><a href="/get/${row.NO}">${row.NAME}</a></li>`;
            });
            li = li + `</ul>`;
            res.send(tmp1+title+li+tmp2);
            console.log(rows);
        })
        .catch((errMsg) => {
            res.send(tmp1+title+errMsg+tmp2);
        });
});

//샘플 상세보기
app.get('/get/:no', (req, res) => {
    title = "<h2>샘플 상세정보</h2>";
    let body = "";
    dbCon.getSample(req.params.no)
    .then((row) => {
        row.forEach(index => {
            body = `<p>no : ${index.NO}, name : ${index.NAME}</p><hr>
            <p><a href="/sampleUpdate/${index.NO}">수정하기</a></p>
            <p><a href="/sampleDelete/${index.NO}">삭제하기</a></p>`;
        });
        res.send(tmp1 + title + body + tmp2);
    })
    .catch((errMsg) => {
        res.send(tmp1 + title + errMsg + tmp2);
    });
});


//샘플 추가
app.get('/sampleInsert', (req, res) => {
    res.sendFile(__dirname+"/sampleForm.html");
});

//샘플 추가 처리
app.post('/sampleInsertPro', (req, res) => {
    let sample = {no:req.body.no, name:req.body.name}
    title = "<h2>샘플 상세정보</h2>";
    dbCon.sampleInsert(sample)
    .then((msg) => {
        console.log(msg);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    });
    res.sendFile(__dirname+"/sampleMain.html");
});

//샘플 수정하기
app.get('/sampleUpdate/:no',(req, res) => {
    title = "<h2>샘플 수정하기</h2>";
    let body = "";
    dbCon.getSample(req.params.no)
        .then((row)=>{
            row.forEach(index => {
                body = `<p><input type="hidden" name="no" value="${index.NO}" placeholder="no hidden"></p>
                <p><input type="text" name="name" value="${index.NAME}" placeholder="name input"></p>`;
            });
            res.send(updateTmp1+title+body+updateTmp2);
        })
        .catch((errMsg) => {
            res.send(tmp1+title+errMsg+tmp2);
        });
});

//샘플 수정 처리
app.post('/sampleUpdatePro', (req,res) => {
    title = "<h2>샘플 수정하기</h2>";
    let sample = [req.body.name, req.body.no];
    dbCon.sampleUpdate(sample)
        .then((msg) => {
            console.log(msg);
        })
        .catch((errMsg) => {
            console.log(errMsg)
        });
        res.sendFile(__dirname+"/sampleMain.html");
});
//샘플 삭제하기
app.get('/sampleDelete/:no', (req, res) => {
    title = "<h2>샘플 수정하기</h2>";
    dbCon.sampleDelete(req.params.no)
        .then((msg) => {
            console.log(msg)
        })
        .catch((errMsg) => {
            console.log(errMsg)
        });
    res.sendFile(__dirname+"/sampleMain.html");
});

let port = 4000;
app.listen(port, () => {
    console.log(`Sever Starting on ${port}`);
});