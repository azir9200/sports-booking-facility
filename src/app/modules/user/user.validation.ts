import { z } from 'zod';

const userValidationSchema = z.object({
  password: z.string().optional(),
  // role: z.enum(['student', 'faculty', 'admin']),
  // status: z.enum(['in-progress', 'blocked']),
  // isDeleted: z.boolean().optional().default(false),
});
export const userValidation = {
  userValidationSchema,
};
