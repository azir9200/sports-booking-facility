import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SemesterRegistrationService } from './semesterRegistration.service';
import { Request, Response } from 'express';

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationService.createSemesterRegistrationIntoDB(
        req.body,
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is created successfully!',
      data: result,
    });
  },
);

const getAllSemesterRegistrations = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationService.getAllSemesterRegistrationsFromDB(
        req.query,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is retrieved successfully !',
      data: result,
    });
  },
);

const getSingleSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id);
    // const { registrationId } = req.params;
    // console.log(registrationId, 'before result');
    const result =
      SemesterRegistrationService.getSingleSemesterRegistrationsFromDB(id);
    console.log(result, 'after result');

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is retrieved successfully',
      data: result,
    });
  },
);

const updateSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      SemesterRegistrationService.updateSemesterRegistrationIntoDB(id,  req.body,);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester Registration is retrieved successfully',
        data: result,
      });

    return result;
  },
);

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,updateSemesterRegistration,
};
