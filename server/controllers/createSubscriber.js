import Subscriber from '../models/Subscriber.js';
import User from '../models/User.js';

const createSubscriber = async (req, res) => {
  const {email} = req.body;
  if (!email) {
    res.status (400).json ({message: 'Email is required'});
    return;
  }
  const userExists = await User.findOne ({email});
  if (!userExists) {
    return res.status (401).json ({message: 'Invalid credentials'});
  }

  const newSubscriber = await Subscriber.create (req.body);
  if (!newSubscriber) {
    res.status (400).json ({message: 'New subscriber not created'});
    return;
  }

  return res.status (201).json ({message: 'New subscriber created'});
};

export default createSubscriber;
