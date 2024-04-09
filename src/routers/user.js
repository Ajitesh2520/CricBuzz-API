import express from 'express';
import { getPlayer } from '../controllers/user.js';
import { authenticate } from '../auth.js';

const router= express.Router()
router.get('/get/:id/status',authenticate,getPlayer);
export default router