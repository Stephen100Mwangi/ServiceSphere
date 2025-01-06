import Message from '../../models/Message.js';
import User from '../../models/User.js';

const fetchMessages = async (req, res) => {
  const {sender, receiver} = req.params;

  if (!sender || !receiver) {
    res
      .status (400)
      .json ({message: 'Sender and receiver IDs must be provided'});
    return;
  }

  const senderFound = await User.findById (sender);
  const receiverFound = await User.findById (receiver);

  if (!receiverFound || !senderFound) {
    res.status (400).json ({message: 'No such user found'});
    return;
  }

  const messages = await Message.find ({
    $or: [
      {sender: sender, receiver: receiver},
      {sender: receiver, receiver: sender},
    ],
  }).sort ({timeSent: 1});

  if (messages.length === 0) {
    res.status (204).json ({message: 'No messages found'});
    return;
  } else {
    res
      .status (200)
      .json ({message: 'Messages fetched successfully', messages});
    return;
  }
};
export default fetchMessages;
