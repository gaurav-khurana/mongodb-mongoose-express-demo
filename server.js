const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect("mongodb://localhost:27017/appdb");

console.log("Connected to MongoDB");

async function runMongoDB() {
  try {
    // create new user
    const newUser = await User.create({
      name: "Piastri",
      age: 24,
      email: "p123@gmail.com",
      hobbies: ["volleyball", "hiking", "gaming"],
      address: {
        street: "123 Garden city",
        city: "Vancouver",
      },
    });
    console.log("User created", newUser);

    // query db
    console.log(await User.find()); // to find all users

    const user = await User.findById("66d7fc95b441f14144184c54"); // findById pass user.id

    user.email = "piastri@f1.com";
    await user.save();

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

runMongoDB();
