// import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TOfferedCourse } from './OfferedCourse.interface';
import { OfferedCourse } from './OfferedCourse.model';

// const createOfferedCourseIntoDB = async (payload: TOfferedCourse) => {
//  //  const result = await OfferedCourse.create({...payload,AcademicSemester,});
//   const result = await OfferedCourse.create({...payload,});
//   return result;
// };

const createOfferedCourseIntoDB = async (payload: TOfferedCourse) => {
  const result = await OfferedCourse.create(payload);
  return result;
};

export const OfferedCourseServices = {
  createOfferedCourseIntoDB,
};
