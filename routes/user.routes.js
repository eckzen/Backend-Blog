//Imports
const { Router } = require("express");
const router = Router();
const auth = require("../middleware/auth");
const {
  registerUser,
  userLogin,
  deleteUser,
} = require("../controllers/user.controller");

// Routes
router.post("/register", registerUser);
router.post("/login", userLogin);
router.delete("/delete", auth, deleteUser);

//Export module
module.exports = router;
