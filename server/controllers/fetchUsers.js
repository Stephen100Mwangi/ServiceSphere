import User from '../models/User.js';

const fetchUsers = async (req, res) => {
  const usersFound = await User.find ();
  if (usersFound.length === 0) {
    return res.status (204).json ({message: 'No users found'});
  }

  return res
    .status (200)
    .json ({message: 'Users fetched successfully', usersFound});
};

export default fetchUsers;
