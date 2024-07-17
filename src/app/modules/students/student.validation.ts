import { z } from 'zod';

// Define the user name schema
const userNameValidationSchema = z.object({
  firstName: z.string().trim(),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim(),
});

// Define the guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().trim(),
  fatherOccupation: z.string().trim(),
  fatherContactNo: z.string(),
  motherName: z.string().trim(),
  motherOccupation: z.string().trim(),
  motherContactNo: z.string(),
});

// Define the local guardian schema
const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Define the student schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().nonempty('password is required'),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email('Invalid email address'),
      contactNo: z.string().nonempty('Contact number is required'),
      emergencyContactNo: z.string().optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string(),
      admissionSemester: z.string(),
    }),
  }),
});

// export default createStudentValidationSchema;

export const studentValidation = {
  createStudentValidationSchema,
};
