import { Model } from 'mongoose';

export interface TProperty {
  propertyImage: string;
  propertyName: string;
  location: string;
  price: number;
  propertyType:
    | 'House'
    | 'Apartment'
    | 'Condo'
    | 'Townhouse'
    | 'Land'
    | 'Other';
  propertyArea: number;
  IsDeleted: boolean;
  status: string;
  rating: number;
  timestamps: boolean;
}
export interface PropertyModel extends Model<TProperty> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<TProperty | null>;
}
