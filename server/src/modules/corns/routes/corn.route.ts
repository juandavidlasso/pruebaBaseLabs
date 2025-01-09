import { Router } from 'express';
import { buyCorn, getCorns } from '../controllers/corn.controller';
import { rateLimitMiddleware } from '../../../middleware/rate-limit.middleware';

const router = Router();

router.post('/corn', rateLimitMiddleware as any, buyCorn as any);
router.get('/corns', getCorns as any);

export default router;
