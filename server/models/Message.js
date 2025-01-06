import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema (
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    message: {
      type: String,
      trim: true,
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    senderName: {
      type: String,
      required: true,
    },
    receiverName: {
      type: String,
      required: true,
    },
    timeSent: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model ('Message', messageSchema);
export default Message;
