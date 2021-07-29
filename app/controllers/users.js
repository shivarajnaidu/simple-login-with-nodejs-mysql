import * as User from '../models/user.js';

export const getUsers = async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    try {
        const { name, email, mobile } = req.body;
        const result = await User.create({ name, email, mobile });
        res.json(result);
    } catch (error) {
        next(error);
    }
}

export const getUserById = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
}

export const updateUserById = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
}


export const deleteById = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
}