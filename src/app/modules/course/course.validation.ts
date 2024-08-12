import { z } from 'zod';

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    isDeleted: z.boolean().optional(),
  }),
});


export const CourseValidations = {
  createCourseValidationSchema,
};
