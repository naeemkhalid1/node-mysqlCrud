const mysql = require('mysql');
const config = require('./config.json');

let dbConfig = config.dbLocal;

// DB config
let createConn = async() => {
  try {
    let connection = await mysql.createConnection(dbConfig)      
    await connection.connect();
    console.log('Connected to database');
    return connection
  } catch (error) {
    console.log('Not connected to database: err: ', error);
    throw error
  }
}

exports.createConn = createConn;
