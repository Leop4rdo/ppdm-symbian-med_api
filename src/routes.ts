import { Router, Request, Response } from 'express';
import PatientController from './application/Controllers/PatientController';

const router = Router();

router.get('/health-check', (req : Request, res : Response) => res.json({ message : 'api is working!'}))

router.use(PatientController)

export default router;

