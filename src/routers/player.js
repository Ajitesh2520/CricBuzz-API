import express from 'express';
import { createPlayer, getPlayer } from '../controllers/player.js';
import { authenticate } from '../auth.js';

const router= express.Router()
router.post('/create',authenticate,createPlayer);
router.get('/get/:player_id/stats',authenticate,getPlayer);
export default router