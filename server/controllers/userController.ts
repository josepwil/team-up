import User from '../models/user';

// to do - replace any with type
const createUser = (req: any, res: any) => {
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


const getUser = () => {
  console.log('user')
}
const updateUser = () => {
  console.log('user')
}

export {createUser, getUser, updateUser};
