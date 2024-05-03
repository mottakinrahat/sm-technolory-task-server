import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { testimonialServices } from './testimonial.service';

const createTestimonial = catchAsync(async (req, res) => {
  const result = await testimonialServices.createTestimonialIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Testimonial created successfully',
    data: result,
  });
});
const getAllTestimonials = catchAsync(async (req, res) => {
  const result = await testimonialServices.getAllTestimonialFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Testimonial are retrieved successfully',
    data: result,
  });
});
export const TestimonialControllers = {
  getAllTestimonials,
  createTestimonial,
};
