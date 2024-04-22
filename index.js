import express from "express";
import mongoose from "mongoose";
import { UserModel } from "./models/UserModel.js";

mongoose.connect("mongodb://localhost:27017/crud");
const app = express();

app.use(express.json());
app.get("/users", (req, res) => {
  try {
    UserModel.find({}).then((users) => {
      res.status(200).json(users);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/postUser", (req, res) => {
  try {
    UserModel.create(req.body).then((data) => {
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
app.delete("/deleteUser/:id", (req, res) => {
  try {
    UserModel.deleteOne({ _id: req.params.id }).then((data) => {
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(5000, () => {
  console.log("listening....");
});
