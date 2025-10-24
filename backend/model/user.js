// models/user.js
const mongoose = require("mongoose");
const { UserSchema } = require("../schemas/UserSchema");

const UserModel = new mongoose.model("user", UserSchema);

module.exports = { UserModel };
