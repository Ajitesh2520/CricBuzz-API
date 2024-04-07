import express from 'express';
import { getPlayer } from '../controllers/user,js';

const router= express.Router()
router.get('/get/:id/status',getPlayer);
export default router