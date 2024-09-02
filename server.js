const mongoose = require("mongoose");
const user = require("./user");

mongoose.connect("mongodb://localhost:27017/appdb");

console.log("Connected to MongoDB");

async function runMongoDB() {
  // chk if cn read from appdb collection frm mongodb
  let user1 = await user.find({ name: "Kris" });
  user1 = await user.find({ age: { $gt: 12 } });
  console.log(user1);
}

runMongoDB();
