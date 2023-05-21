const express = require("express")
const router = express.Router()
const authentication = require("../../utils/authentication")

router.route("/login")
    .post(authentication.login)
router.route("/signup")
    .post(authentication.signup)
router.route("/logout")
    .delete(authentication.logout)
router.route("/update")
    .put(authentication.updateUser) 

module.exports = router