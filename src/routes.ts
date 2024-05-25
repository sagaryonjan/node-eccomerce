import { Router } from 'express';

import postRoutes from './routes/post.routes';
import authRoutes from './routes/auth.routes';
import docRoutes from './routes/doc.routes';
import * as mockDataController from './controllers/mockData.controller';



const router: Router = Router();

router.use('/posts', postRoutes);
router.use('/slides', mockDataController.fetchSlides);
router.use('/products', mockDataController.fetchProducts);

router.use('/auth', authRoutes);

router.use('/docs', docRoutes); // swagger doc route

export default router;
