const dbCon = require("../model/sample.js");
const express = require("express");
const app = express();

let temp1=``
let temp2=``

app.get('/', (req, res) => {
    res.send("<h2>main</h2>")
})
app.get('/list', (req, res) => {
    dbCon.getSampleList()
    .then((rows) => {
        res.send(rows)
    })
    .catch((errMsg) => {
        res.send(errMsg);
    })
})
app.get('/get/:no', (req, res) => {
    dbCon.getSample(req.params.no)
        .then((row) => {
            res.send(row);
        })
        .catch((errMsg) => {
            res.send(errMsg)
        })
})

let port = 4000;
app.listen(port, () => {
    console.log(`Server Starting on ${port}`)
})