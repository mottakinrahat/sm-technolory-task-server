import express from 'express';
import { propertiesControllers } from './properties.controller';
import validateRequest from '../../middlewares/validateRequest';
import { propertyValidation } from './properties.validation';

const router = express.Router();
router.post(
  '/',
  validateRequest(propertyValidation.PropertyValidationSchema),
  propertiesControllers.createProperties,
);
router.get(
  '/',

  propertiesControllers.getAllProperties,
);
router.get(
  '/:id',

  propertiesControllers.getSingleProperties,
);
export const PropertyRoutes = router;
