const dbCon = require("./mariaDBConn");
const express = require("express");
const app = express();

let sample = {name: '최보경'}

dbCon.sampleInsert(sample)
    .then((msg) => {
            console.log(msg);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    })

let port = 4000;
app.listen(port, () => {
    console.log(`Server Starting on ${port}`)
})