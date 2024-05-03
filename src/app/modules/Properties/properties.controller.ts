import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { propertyServices } from './properties.service';

interface QueryParams {
  propertyName?: string;
  priceRange?: string;
  location?: string;
  propertyType?: string;
}

const createProperties = catchAsync(async (req: Request, res: Response) => {
  const result = await propertyServices.createPropertiesIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Properties created successfully',
    data: result,
  });
});

const getAllProperties = catchAsync(async (req: Request, res: Response) => {
  const { propertyName, priceRange, location, propertyType }: QueryParams =
    req.query;
  let filter: any = {};

  if (propertyName) {
    filter.propertyName = { $regex: new RegExp(propertyName, 'i') };
  }
  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);
    filter.price = { $gte: minPrice, $lte: maxPrice };
  }
  if (location) {
    filter.location = { $regex: new RegExp(location, 'i') };
  }
  if (propertyType) {
    filter.propertyType = propertyType;
  }

  const result = await propertyServices.getAllPropertiesFromDB(filter);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Properties are retrieved successfully',
    data: result,
  });
});

const getSingleProperties = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await propertyServices.getSinglePropertyFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Property is retrieved successfully',
    data: result,
  });
});

export const propertiesControllers = {
  getAllProperties,
  createProperties,
  getSingleProperties,
};
