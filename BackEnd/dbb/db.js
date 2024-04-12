const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'software_2'
  })

  connection.connect((err)=>{
    if(!err){
        console.log('DB is connect')
    }
    else{
        console.log("err")
    }
  })
  module.exports = connection