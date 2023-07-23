const mongoose = require("mongoose");
require("colors");

//connecDB Function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://learning:GQYt8dQLYgclgYOx@cluster0.t6fgp1f.mongodb.net/");
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};

//export
module.exports = connectDb;
