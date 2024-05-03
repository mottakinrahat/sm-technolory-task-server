import { TUserTestimonial } from './testimonial.interface';
import { UserTestimonial } from './testimonial.model';

const createTestimonialIntoDB = async (payload: TUserTestimonial) => {
  const result = await UserTestimonial.create(payload);
  return result;
};

const getAllTestimonialFromDB = async () => {
  const result = await UserTestimonial.find();
  return result;
};

export const testimonialServices = {
  createTestimonialIntoDB,
  getAllTestimonialFromDB,
};
