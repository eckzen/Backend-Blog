const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const createError = require("http-errors");
require("dotenv").config();

const app = express();

// Middlewares
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Initialize DB
require("./config/db")();

// Import Routes
app.use("/users", require("./routes/userRouter"));

// 404 handler and pass to error handler
app.use((req, res, next) => {
  next(createError(404, "Not Found"));
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

// Run Morgan from development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
