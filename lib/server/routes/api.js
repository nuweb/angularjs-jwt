/**
 * External dependencies
 */
import express from 'express';

/**
 * Internal dependencies
 */
import login from '../controllers/login';
import register from '../controllers/register';

const router = express.Router();

// Login
router.route('/login').get(login);
// Register
router.route('/register').get(register);

export default router;
