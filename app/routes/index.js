import { userRouter } from './users.js';

const initRoutes = (app) => {
    app.use('/api/v1/users', userRouter);
    app.use((error, req, res, next) => {
        res.status(error.status || 500).json(error);
    })
};

export { initRoutes };