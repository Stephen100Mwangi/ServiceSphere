import mongoose from 'mongoose';

const SubScriber = new mongoose.Schema ({
  email: {
    type: String,
    required: true,
  },
});

const Subscriber = mongoose.model ('Subscriber', SubScriber);
export default Subscriber;
