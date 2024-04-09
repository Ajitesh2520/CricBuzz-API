import express from 'express';
import { createTeam, findTeam } from '../controllers/team.js';
import { authenticate } from '../auth.js';

const router= express.Router()

router.post('/create',authenticate,createTeam);
router.get('/get',findTeam);

export default router