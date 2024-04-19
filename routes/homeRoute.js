


const express = require("express")
const { Allhome, home, createhome, updatehome, deletehome } = require("../controllers/homeController")

const router = express.Router();

router.route("/home").get(Allhome).post(createhome)

router.route("/home/:id").delete(deletehome).post(home).put(updatehome)

module.exports = router