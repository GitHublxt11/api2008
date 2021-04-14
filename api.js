var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'nodejs'
});

connection.connect();

connection.query('SELECT user_id,user_name,email from p_users limit 10', function (error, results, fields) {
    //获取查询的结果 results
    console.log(results[0].user_name);
});

connection.end();