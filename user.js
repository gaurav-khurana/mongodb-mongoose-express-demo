const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("users", userSchema);
