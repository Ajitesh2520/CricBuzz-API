import express from 'express';
import { createMatch } from '../controllers/match.js';
import { authenticate } from '../auth.js';

const router= express.Router()

router.post('/create',authenticate,createMatch);
export default router