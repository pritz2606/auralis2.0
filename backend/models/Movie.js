import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
    trim: true,
  },
  releaseDate: {
    type: Date,
    required: [true, "Release date is required"],
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: null,
  },
}, { timestamps: true });

export default mongoose.model("Movie", MovieSchema);
