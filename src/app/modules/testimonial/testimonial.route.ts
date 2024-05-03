import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { userTestimonialValidation } from './testimonial.validation';
import { TestimonialControllers } from './testimonial.controller';

const router = express.Router();
router.post(
  '/',
  validateRequest(userTestimonialValidation.UserTestimonialValidationSchema),
  TestimonialControllers.createTestimonial,
);
router.get(
  '/',

  TestimonialControllers.getAllTestimonials,
);
export const TestimonialRoutes = router;
