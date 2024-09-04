const mongoose = require("mongoose");

// const addressSchema = mongoose.Schema({
//   street: String,
//   city: String,
// });

const userSchema = new mongoose.Schema({
  name: String,

  age: {
    type: Number,
    min: 1, // can set range, this prevents -ve value or invalid value
    max: 100,
    validate: {
      // custom validation
      validator: (value) => value % 2 === 0, // to chk if age is even number
      message: (props) => `${props.value} is not an even number`, // msg to render if validation fails
    },
  },

  email: {
    type: String,
    required: true, // makes field mandatory
    lowercase: true, // converts email to lowercase; if uppercase: true then all uppercase
    minLength: 10, // adds validation for str with min & max length
    maxLength: 50,
  },

  createdAt: {
    type: Date,
    default: () => Date.now(), // runs func to get current time & date; if default: Date then static value
    immutable: true, // immutable means cant change createdAt field manually
  },

  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },

  hobbies: [String],

  // can have address like this for simple nesting; else have seperate schema & ref here
  address: {
    street: String,
    city: String,
  },
  // ref above schema here
  // address: addressSchema,

  bestFriend: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("users", userSchema);
