import express from 'express';
import { createMatch, getMatch } from '../controllers/match.js';
import { authenticate } from '../auth.js';

const router= express.Router()

router.post('/create',authenticate,createMatch);
router.get('/get/:match_id',authenticate,getMatch)
export default router