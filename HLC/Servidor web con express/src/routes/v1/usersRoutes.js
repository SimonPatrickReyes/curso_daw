const express = require("express")
const router = express.Router()
const authentication = require("../../utils/authentication")

router.route("/login")
    .post(authentication.login)

module.exports = router
