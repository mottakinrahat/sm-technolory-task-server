import { TProperty } from './properties.interface';
import { Property } from './properties.model';

const createPropertiesIntoDB = async (payload: TProperty) => {
  const result = await Property.create(payload);
  return result;
};

const getAllPropertiesFromDB = async (filter: any) => {
  const result = await Property.find(filter);
  return result;
};
const getSinglePropertyFromDB = async (id: string) => {
  const result = await Property.findById(id);
  return result;
};

export const propertyServices = {
  createPropertiesIntoDB,
  getAllPropertiesFromDB,
  getSinglePropertyFromDB,
};
