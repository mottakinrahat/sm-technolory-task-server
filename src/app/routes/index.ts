import { Router } from 'express';
import { PropertyRoutes } from '../modules/Properties/properties.route';
import { TestimonialRoutes } from '../modules/testimonial/testimonial.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/properties',
    route: PropertyRoutes,
  },
  {
    path: '/testimonial',
    route: TestimonialRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
