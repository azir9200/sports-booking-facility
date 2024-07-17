import { ErrorRequestHandler } from 'express';
import { TErrorSources } from '../error/interface';
import { ZodError } from 'zod';
import handleZodError from '../error/handleZodError';
import config from '../config';
import handleValidationError from '../error/handleValidationError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'what is wrong!';
  let errorSources: TErrorSources = [
    {
      path: 'my error',
      message: 'Azir, Something went wrong',
    },
  ];

  // if (err instanceof ZodError){
  //   statusCode: 300;
  //   message = 'amii zod error',
  // }
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err?.name === 'AppError') {
    console.log('ami  APP error');
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    amiError: err,
    stack: config.node_env === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
