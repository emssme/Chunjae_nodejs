const mariadb = require("mariadb");
const cfg = require("./conf.js");

const pool = mariadb.createPool({
    host: cfg.host,
    port: cfg.port,
    user: cfg.user,
    password: cfg.pass,
    connectionLimit :cfg.connectionLimit
})

//리스트 js25
async function getSampleList(){
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE teaspoon');
        rows = await conn.query('select * from sample')
    } catch(err) {
        throw err;
    } finally{
        if(conn) conn.end();
        return rows
    }
}

//하나만 js26
async function getSample(no){
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE teaspoon');
        rows = await conn.query(`select * from sample where no = ${no}`)
    } catch(err) {
        throw err;
    } finally{
        if(conn) conn.end();
        return rows
    }
}

//insert js27
async function sampleInsert(sample){
    let conn, nickname, msg, sql;
    nickname = sample.name;
    try{
        conn = await pool.getConnection();
        conn.query('USE teaspoon');
        sql = `insert into sample values(default, ?)`;
        await conn.query(sql, nickname);
        msg = "등록 성공";
    } catch(err) {
        msg = "등록 실패";
        console.log(err)
        throw err;
    } finally{
        if(conn) conn.end();
        return msg;
    }
}

//update js28
async function sampleUpdate(sample){
    let conn, msg, sql;
    try{
        conn = await pool.getConnection();
        conn.query('USE teaspoon');
        sql = `update sample set name=? where no=? `;
        await conn.query(sql, sample);
        msg = "수정 성공";
    } catch(err) {
        msg = "수정 실패";
        console.log(err)
        throw err;  
    } finally{
        if(conn) conn.end();
        return msg;
    }
}

//delete js29
async function sampleDelete(no) {
    let conn, msg, sql;
    try{
        conn = await pool.getConnection();
        conn.query('USE teaspoon');
        sql = `delete from sample where no=?`;
        await conn.query(sql, no);
        msg = "삭제 성공";
    } catch(err) {
        msg="삭제 실패";
        throw err;
    } finally{
        if(conn) conn.end();
        return msg;
    }

}

module.exports = {
    getSampleList: getSampleList,
    getSample : getSample,
    sampleInsert : sampleInsert,
    sampleUpdate : sampleUpdate,
    sampleDelete : sampleDelete
}