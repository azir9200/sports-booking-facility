import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidation } from '../students/student.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidation.createStudentValidationSchema),
  UserController.createStudent,
);

export const UserRoute = router;

// import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
// import { UserController } from './user.controller';
// import { studentValidation } from '../students/student.validation';
// // import { createStudentValidationSchema } from './../student/student.validation';
// // import { UserControllers } from './user.controller';

// const router = express.Router();

// router.post(
//   '/create-student',
//   validateRequest(studentValidation.createStudentValidationSchema),
//   UserController.createStudent,
// );

// export const UserRoute = router;
