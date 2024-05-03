import { Schema, model } from 'mongoose';
import {
  UserTestimonialModel,
  TUserTestimonial,
} from './testimonial.interface';

const userTestimonialSchema = new Schema<TUserTestimonial>(
  {
    userImage: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userDesignation: {
      type: String,
      required: true,
    },
    userTestimonial: {
      type: String,
      required: true,
    },
    userRating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export const UserTestimonial = model<TUserTestimonial, UserTestimonialModel>(
  'UserTestimonial',
  userTestimonialSchema,
);
