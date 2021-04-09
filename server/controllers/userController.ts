import { Request, Response } from 'express';
import User from '../models/user';


// to do - replace any with type
const createUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (user) {
        return res.status(400).json({error: 'User already exists'})
      }

      User.create({name, email, password}, (err, user) => {
        if(err) {
          console.log('ERROR: ', err)
          return 
        }
        console.log('user created')
        return res.status(201).json(user)
      })
    })
    .catch(err => {
      console.log('ERROR', err.message)
    })
  }

const getAllUsers = (req: Request, res: Response) => {
  User.find({})
    .then(users => {
      if(!users.length) {
        return res.status(400).json({error: 'There are no users'})
      }
      return res.status(200).json(users)
    })
    .catch(err => {
      console.log('ERROR: ', err)
    }) 
}

const getUserById = (req: Request, res: Response) => {
  const userId = req.params.id;
  User.findById(userId)
    .then(user => {
      if (user) {
        return res.status(200).json(user)
      }
      return res.status(400).json({error: 'No such user'})
    })
    .catch(err => {
      console.log('ERROR: ', err)
    })
}

const updateUser = () => {
  console.log('user')
}

export {createUser, getUserById, updateUser, getAllUsers};
