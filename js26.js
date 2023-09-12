const dbCon = require("./mariaDBConn");
const express = require("express");
const app = express();

dbCon.getSample(1)
    .then((rows) => {
            console.log(rows);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    })

let port = 4000;
app.listen(port, () => {
    console.log(`Server Starting on ${port}`)
})