import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  subscription: { type: Boolean, default: false },
  plan: { type: String, default: "" }
});

export default mongoose.model("User", UserSchema);
