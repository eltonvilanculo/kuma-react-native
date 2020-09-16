var mysql = require('mysql')
var consult = "SELECT words_pt.description as 'port', words_rg.description as 'ronga', meaning_all.id FROM words_pt JOIN meaning_all ON words_pt.id=meaning_all.pt_id_fk JOIN words_rg ON words_rg.id=meaning_all.rg_id_fk"
const express = require('express')
const app = express()
const port = 3000
const prod = {
        id: 01,
        name: "Name",
        range: 12
}

app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
});

var config = {
        host: "localhost",
        user: "root",
        password: "",
        database: "kubadb"
}


var conn = mysql.createConnection(config)

if (conn) {
        conn.query(consult, function (error, result, fields) {
                if (error) throw error
                app.get("/meaning", function (req, resp) {
                        resp.send(result)
                })
        })
}

app.get("/example", function (req, res) {
        res.send(prod)
})
app.listen(port, function () {
        console.log("testing")
})