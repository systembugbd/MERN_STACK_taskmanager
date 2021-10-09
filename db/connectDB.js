const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoBD Connected successfully..."))
    .catch((e) => console.log(e.message));
};

module.exports = connectDB;
