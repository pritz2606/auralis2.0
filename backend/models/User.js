import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  subscription: {
    type: Boolean,
    default: false,
  },
  plan: {
    type: String,
    enum: ["Basic", "Standard", "Premium", ""], // Enforcing only valid plans
    default: "",
  },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
