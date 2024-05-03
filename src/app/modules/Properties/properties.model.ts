import { Schema, model } from 'mongoose';
import { PropertyModel, TProperty } from './properties.interface';

const propertySchema = new Schema<TProperty>(
  {
    propertyImage: {
      type: String,
      required: true,
    },
    propertyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ['House', 'Apartment', 'Condo', 'Townhouse', 'Land', 'Other'],
      required: true,
    },
    propertyArea: {
      type: Number,
      required: true,
    },
    IsDeleted: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export const Property = model<TProperty, PropertyModel>(
  'Property',
  propertySchema,
);
