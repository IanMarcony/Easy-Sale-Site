const mysql = require("mysql")

function excQueySql(query,res) {
    const connection = mysql.createConnection({
        host     : 'localhost',
        port     : '3306',
        user     : 'root',
        password : '',
        database : 'vendafacil_db'
      });

      connection.query(sqlQry, function(error, results, fields){
          if(error) 
            res.json(error);
          else
            res.json(results);
          connection.end();
          console.log('executou!');
      });
    
}

module.exports = {
    excQueySql: excQueySql,
    mysql:mysql
}


