import express from 'express';
import { createPlayer } from '../controllers/player.js';
import { authenticate } from '../auth.js';

const router= express.Router()
router.post('/create',authenticate,createPlayer);
export default router