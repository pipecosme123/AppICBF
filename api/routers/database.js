const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '162.214.162.222',
  user: 'kagencia_developer',
  password: 'N;Z6c^EW!}+pImrhb%',
  database: 'kagencia_icbf'
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('DB is connect');
  }
});

// mysqlConnection.query('SELECT * from EPS', function (error, results, fields) {
//   if (error) throw error;

//   results.forEach(result => {
//     console.log(result);
//   });
// });

// mysqlConnection.end();
module.exports = mysqlConnection;

// module.exports = mysqlConnection;