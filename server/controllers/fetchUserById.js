import User from '../models/User.js';

const fetchUserById = async (req, res) => {
  const {id} = req.params;
  if (!id) {
    res.status (400).json ({message: 'User ID must be provided'});
    return;
  }
  const userFound = await User.findById (id);

  if (!userFound) {
    return res.status (404).json ({message: 'User NOT found'});
  } else {
    return res
      .status (200)
      .json ({message: 'User fetched successfully', userFound});
  }
};

export default fetchUserById;
