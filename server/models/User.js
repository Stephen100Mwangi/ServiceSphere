import mongoose, {mongo} from 'mongoose';

const userSchema = new mongoose.Schema ({
  username: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model ('user', userSchema);
export default User;
