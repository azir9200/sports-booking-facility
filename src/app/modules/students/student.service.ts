import { Student } from './student.model';


// const createStudentIntoDB = async (student: TStudent) => {
//   const result = await Student.create(student);
//   return result;
// };

// const createStudentIntoDB = async (studentData: TStudent) => {
//   // if (await Student.isUserExists(studentData.id)) {
//   //   throw new Error('Instance Method:  User already exists ! ');
//   // }
//   const result = await Student.create(studentData);

//   // const student = new Student(studentData);    //static Method
//   // if(await student.isUserExists(studentData.id)){
//   //   throw new Error('oi, User Already Exists !')  }
//   // const result = await student.save();
//   return result;
// };

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

// const getSingleStudentFromDB = async (id: string) => {
//   const result = await Student.aggregate([{ $match: { id: id } }]);
//   // const result = await Student.findOne({ id });
//   return result;
// };

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  // createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
