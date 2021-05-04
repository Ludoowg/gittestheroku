const mysql = require('mysql');

const dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'smily77!',
    database: ''
});

dbconnection.connect(err => {
    if (err) throw err;
    console.log("Connected");
});

createData = function (result) {
    dbConn.query("MYSQL INSTRUCTION", function (err, res) {
        if(err) {
            console.log(err);
            result(err, null);
            }
        else {
            console.log(res.?);
            result(null, res.?);
            }
        });
    };

module.exports = dbconnection;