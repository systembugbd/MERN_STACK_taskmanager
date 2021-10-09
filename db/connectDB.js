const mongoose = require("mongoose");

// const uri = `mongodb+srv://nadim:nadim@123456@storages.blqnk.mongodb.net/TaskManager?retryWrites=true&w=majority`;
// const url = `mongodb+srv://nadim:nadim123456@storages.blqnk.mongodb.net/TaskManager?retryWrites=true&w=majority`;

const connectDB = (url) => {
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoBD Connected successfully..."))
    .catch((e) => console.log(e.message));
};

module.exports = connectDB;
