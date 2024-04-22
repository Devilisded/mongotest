import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

export const UserModel = mongoose.model("users", UserSchema);
