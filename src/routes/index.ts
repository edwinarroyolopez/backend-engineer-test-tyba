import { Router } from 'express';
import { signup } from './users'
import { 
    login,
    logout
 } from './session';
 import { getRestaurants } from './restaurants'
 import { 
     getUserLogs,
     getLogs
 } from './logs'

const router = Router();

/* users routes */
router.post('/signup', signup);

/* session routes */
router.post('/login', login);
router.post('/logout', logout);

/* restaurants routes */
router.get('/get-restaurants', getRestaurants);

/* logs routes */
router.get('/logs/:userId', getUserLogs);
router.get('/logs', getLogs);

export default router