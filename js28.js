const dbCon = require("./mariaDBConn");
const express = require("express");
const app = express();

let sample = ["강감찬", 7]

dbCon.sampleUpdate(sample)
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