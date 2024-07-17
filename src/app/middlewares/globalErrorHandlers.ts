import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { TErrorSources } from '../error/interface';
import { ZodError } from 'zod';
import handleZodError from '../error/handleZodError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

  let statusCode = 500;
  let message = 'what is wrong!';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    amiiiierror: err,
    test: '',
  });
};

export default globalErrorHandler;
