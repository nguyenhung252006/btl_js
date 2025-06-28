const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "btl_js",
    port: 3306,
    password: "hung@2006",
})

connection.connect(err => {
    if(err){
        console.log("connect is false",err)
    }else {
        console.log("Connected to MySQL successfully!")
    }
})

module.exports = connection