import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandlers';
import notFound from './app/middlewares/notFoundRoute';
import router from './app/routes';

const app: Application = express();
app.use(express.json());
app.use(cors());

// application routes
// app.use('/api/v1/students', studentRoute);
// app.use('/api/v1/users', userRoute);

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
