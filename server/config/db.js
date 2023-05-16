const mysql = require('mysql');
const secret =require('./secret');


// MySQL 연결 설정
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: secret.DB_USER,
    password: secret.DB_PASSWORD,
    database: secret.DB_DATABASE,
    port:'3306'
});
  
// MySQL 연결
db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL connected...');
});


module.exports=db;
