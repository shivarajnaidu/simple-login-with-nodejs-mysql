import config from 'config';
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    connectionLimit: 10,
    host: config.get('SQL_DB_HOST'),
    database: config.get('SQL_DB_NAME'),
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
});

pool.on('error', (erorr) => {
    console.log(error);
});


console.log('DB Connection Pool Created');