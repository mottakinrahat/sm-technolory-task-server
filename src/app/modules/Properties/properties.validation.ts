import { z } from 'zod';

export const PropertyValidationSchema = z.object({
  body: z.object({
    propertyImage: z.string().url(),
    propertyName: z.string().min(1),
    location: z.string().min(1),
    status: z.string().min(1),
    price: z.number().positive(),
    propertyType: z.enum([
      'House',
      'Apartment',
      'Condo',
      'Townhouse',
      'Land',
      'Other',
    ]),
    propertyArea: z.number().positive(),
    IsDeleted: z.boolean().optional(),
    rating: z.number().min(0).max(5).optional(),
    timestamps: z.boolean().optional(),
  }),
});
export const propertyValidation = {
  PropertyValidationSchema,
};
