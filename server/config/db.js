const mysql = require('mysql');



// MySQL 연결 설정
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Kgs77220!',
    database: 'ToDoWeb',
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
