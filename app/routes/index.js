import { userRouter } from './users.js';

const initRoutes = (app) => {
    app.use('/api/v1/users', userRouter);
};

export { initRoutes };