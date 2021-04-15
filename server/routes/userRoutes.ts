import express from 'express';
import { createUser, getUserById, updateUser, getAllUsers, loginUser } from '../controllers/userController'

const router = express.Router();

// get all users
router.get('/', getAllUsers)

// get specific user
router.get('/:id', getUserById)

// create a new user
router.post('/', createUser)

//login a user
router.post('/login', loginUser)

// edit an existing user
router.put('/:id', updateUser)

export default router;