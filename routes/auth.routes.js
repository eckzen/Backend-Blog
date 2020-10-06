//Imports
const { Router } = require("express");
const router = Router();
const { tokenIsValid, isLogin } = require("../controllers/auth.controller");

router.post("/tokenIsValid", tokenIsValid);
router.get("/", isLogin);

//Export module
module.exports = router;
