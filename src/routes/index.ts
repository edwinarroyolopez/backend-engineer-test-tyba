import { Router } from 'express';
import { signup } from './users'
import { 
    login,
    logout
 } from './session';

const router = Router();

/* users routes */
router.post('/signup', signup);

/* session routes */
router.get('/login', login);
router.get('/logout', logout);

export default router
