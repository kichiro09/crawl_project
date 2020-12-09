var mysql = require('mysql');
 
console.log('Get connection ...');
 
var conn = mysql.createConnection({
  database: 'test',
  host: "localhost",
  user: "root",
  password: ""
});
 
conn.connect(function(err) {
  	if (err) throw err;
  	console.log("Connected!");
});

var sql = "select * from abc";
conn.query(sql, function(err, rows) {
	if (err) throw err;
	console.log("length " + rows.length + "\n-name: " + rows[0].name + " | address: " + rows[0].address);
});
conn.end();