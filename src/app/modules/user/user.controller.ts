import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    console.log(req.body);   
    const result = await UserService.createStudentIntoDB(password, studentData);
    
    sendResponse(res,{
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Created Successfully !',
      data: result,
    })
  } catch (err: any) {
    next(err);
  }
};
export const UserController = {
  createStudent,
};
