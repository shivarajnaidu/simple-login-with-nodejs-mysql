import { pool } from '../services/db.js';
import { v4 as uuid } from 'uuid';


export const createUser = ({ name, email, mobile } = {}) => {
    const data = { id: uuid(), name, email, mobile };
    const query = `INSERT INTO users SET ?;`;
    return pool.query(query, data);
};


export const updateUserById = (id, data = {}) => {
    const query = `UPDATE users SET ? WHERE id = ?;`;
    return pool.query(query, [data, id]);
};

export const deleteUserById = (id) => {
    const query = `DELETE FROM users WHERE id = "${id}";`;
    return pool.query(query);
};

export const getUserById = (id) => {
    const query = `SELECT * FROM users WHERE id = "${id}";`;
    return pool.query(query);
};

export const getUsers = ({ offset = 0, limit = 10 } = {}) => {
    const query = `SELECT * FROM users LIMIT ${limit} OFFSET ${offset};`;
    return pool.query(query);
};


export const create = createUser;
export const find = getUsers;
