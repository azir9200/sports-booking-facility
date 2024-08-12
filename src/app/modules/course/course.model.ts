import { Schema, model } from 'mongoose';
import { TCourse } from './course.interface';

const courseSchema = new Schema<TCourse>({
  title: {
    type: String,
  },
  prefix: {
    type: String,
  },
  code: {
    type: Number,
  },
  credits: {
    type: Number,
  },
  isDeleted: {
    type: Boolean,
  },
});

export const Course = model<TCourse>('Course', courseSchema);
