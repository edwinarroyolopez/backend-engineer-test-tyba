import { Router } from 'express';
import { 
    login,
    logout
 } from './session';

const router = Router();
/* session route */
router.get('/login', login);
router.get('/logout', logout);


export default router
