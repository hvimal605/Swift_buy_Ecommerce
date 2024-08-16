// Import the required modules
const express = require("express")
const { login, signup, sendOTP, changePassword } = require("../controller/Auth")
const { auth } = require("../middlewares/auth")
const router = express.Router()




router.post("/login", login)
router.post("/signup", signup)
router.post("/sendotp", sendOTP)
router.post("/changepassword", auth, changePassword)

module.exports = router