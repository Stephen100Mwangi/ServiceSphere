import Message from '../../models/Message.js';
import User from '../../models/User.js';

const createMessage = async (req, res,next) => {
  const {sender, receiver, receiverName, senderName, message} = req.body;

  if (!sender || !receiver || !receiverName || !senderName || !message) {
    res.status (400).json ({message: 'All fields are required'});
    return;
  }

  const senderFound = await User.findById (sender);
  const receiverFound = await User.findById (receiver);
  if (!senderFound) {
    res.status (400).json ({message: 'No such sender found'});
    return;
  }

  if (!receiverFound) {
    res.status (400).json ({message: 'No such receiver found'});
    return;
  }

  // Create a new message
  const newMessage = await Message.create ({
    sender,
    message,
    receiver,
    senderName,
    receiverName,
  });

  if (!newMessage) {
    res.status (400).json ({message: 'Error creating message'});
    return;
  }

  res.status (201).json ({message: 'Message created successfully', newMessage});
};

export default createMessage;
