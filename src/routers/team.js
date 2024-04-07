import express from 'express';
import { createTeam, findTeam } from '../controllers/team.js';

const router= express.Router()

router.post('/create',createTeam);
router.get('/get',findTeam);

export default router