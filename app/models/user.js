import { pool } from '../services/db.js';
import { v4 as uuid } from 'uuid';

const TABLE_NAME = 'users';

export const createUser = ({ name, email, mobile }) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO users VALUES ("${uuid()}", ?, ?, ?);`;
        // const query = `INSERT INTO mydb.users ("id", "name", "email", "mobile") VALUES ("${uuid()}", "123", "kkffj", "dfdc");`;
        pool.query(query, [name, email, mobile], function (error, results, fields) {
            if (error) {
                return reject(error);
            }

            resolve({ results, fields });
        });
    });

};

export const create = createUser;

export const updateUser = (id, { name, email, password }) => {

};

export const deleteUser = (id, { name, email, password }) => {

};

export const getUser = (id, { name, email, password }) => {

};

export const getUsers = ({ name, email }) => {

};