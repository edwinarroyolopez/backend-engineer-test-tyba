import { Router } from 'express';
import { signup } from './users'
import { 
    login,
    logout
 } from './session';
 import { getRestaurants } from './restaurants'

const router = Router();

/* users routes */
router.post('/signup', signup);

/* session routes */
router.get('/login', login);
router.get('/logout', logout);

/* restaurants routes */
router.get('/get-restaurants', getRestaurants);

export default router
