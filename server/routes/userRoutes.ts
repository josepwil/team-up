import express from 'express';
import { createUser, getUser, updateUser } from '../controllers/userController'

const router = express.Router();

// get specific user
router.get('/:id', getUser)

// create a new user
router.post('/', createUser)

// edit an existing user
router.put('/:id', updateUser)