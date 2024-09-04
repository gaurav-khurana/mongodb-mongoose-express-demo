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
    let findUser = await User.findById("66d803f8b182d62618808a5d");
    findUser.email = "piastri@f1.com";
    await findUser.save();

    // query db
    console.log(await User.find()); // to find all users

    let user = await User.findById("66d803f8b182d62618808a5d"); // findById pass user.id

    user = await User.find({ name: "Piastri" }); // gives all user with this name
    console.log(user);

    user = await User.findOne({ name: "Piastri" }); // gives 1st user with this name
    console.log(user);

    user = await User.exists({ name: "Piastri" }); // chk if users exists

    // user = await User.deleteOne({ name: "Piastri" }); // Deletes 1st user with this name

    // user = await User.deleteMany({ name: "Piastri" }); // Deletes all user with this name

    console.log(user);

    // custom query method in mongoose
    user = await User.where("name").equals("Piastri"); // same as .find({name: 'Piastri'})

    user = await User.where("age").gt("40"); // filter results with age > 40

    user = await User.where("age").lt("30"); // filter results with age < 30

    user = await User.where("age").lt("30").where("name").equals("Piastri"); // chained filteration

    user = await User.where("age")
      .lt("40")
      .where("name")
      .equals("Puja")
      .limit(2); // add limit to number of results

    user = await User.where("age")
      .lt("40")
      .where("name")
      .equals("Puja")
      .limit(2)
      .select("hobbies"); // return specific fields after filtering results

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
runMongoDB();
