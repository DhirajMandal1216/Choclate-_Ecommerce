
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  number: Number,
  password: String,
  cPassword: String,
});

const userModel= mongoose.model('user',userSchema)
export default userModel
