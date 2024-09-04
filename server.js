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

    // update user
    let findUser = await User.findById("66d7fc95b441f14144184c54");
    findUser.email = "piastri@f1.com";
    findUser.save();

    // query db
    console.log(await User.find()); // to find all users

    let user = await User.findById("66d7fc95b441f14144184c54"); // findById pass user.id

    user = await User.find({ name: "Piastri" }); // gives all user with this name

    user = await User.findOne({ name: "Piastri" }); // gives 1st user with this name

    user = await User.exists({ name: "Piastri" }); // boolean output to see if users exists

    user = await User.deleteOne({ name: "Piastri" }); // Deletes 1st user with this name

    user = await User.deleteMany({ name: "Piastri" }); // Deletes all user with this name

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

runMongoDB();
