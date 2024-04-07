import express from 'express';
import { createPlayer } from '../controllers/player.js';

const router= express.Router()
router.post('/create',createPlayer);
export default router