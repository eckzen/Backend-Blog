//Imports
const { Router } = require("express");
const router = Router();
const {
  registerUser,
  userLogin,
  userLogout,
} = require("../controllers/user.controller");

// Routes
router.post("/register", registerUser);
router.post("/login", userLogin);
router.delete("/logout", userLogout);

//Export module
module.exports = router;
