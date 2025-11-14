import { Request, Response, Router } from 'express';
// import prisma from '../utils/prisma';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  res.json('Hello World');
});

export default router;
