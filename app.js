const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();

// Load Config
dotenv.config();
connectDB();

// set up express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", process.env.PORT || 4000);

// set up routes

app.use("/users", require("./routes/userRouter"));
