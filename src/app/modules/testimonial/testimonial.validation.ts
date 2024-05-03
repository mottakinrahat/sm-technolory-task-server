import { z } from 'zod';

export const UserTestimonialValidationSchema = z.object({
  body: z.object({
    userImage: z.string().url(),
    userName: z.string().min(1),
    userDesignation: z.string().min(1),
    userTestimonial: z.string().min(1),
    userRating: z.number().min(1).max(5),
  }),
});
export const userTestimonialValidation = {
  UserTestimonialValidationSchema,
};
