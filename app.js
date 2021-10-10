const express = require("express");
const Task = require("./router/task");
const app = express();
const connectDB = require("./db/connectDB");
const notfound = require("./middlewar/notfound");
const errorHandler = require("./middlewar/errorHandler");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

// Set Default Route
app.use("/api/v1/task", Task);

//Set Middlewar
app.use(notfound);
app.use(errorHandler);

//start Server and Database connection
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log("Server is listning on Port", PORT));
  } catch (error) {
    console.log("I am Error: " + error.message);
  }
};

startServer();
