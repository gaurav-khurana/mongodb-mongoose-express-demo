const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect("mongodb://localhost:27017/appdb");

console.log("Connected to MongoDB");

async function runMongoDB() {
  try {
    const newUser = await User.create({
      name: "Piastri",
      age: 31,
      email: "pk123@gmail.com",
      hobbies: ["volleyball", "hiking", "gaming"],
      address: {
        street: "123 Garden city",
        city: "Vancouver",
      },
    });
    console.log("User created", newUser);
  } catch (error) {
    console.log(error.message);
  }
}

runMongoDB();
