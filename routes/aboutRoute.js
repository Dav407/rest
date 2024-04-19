

const express = require("express")
const { AllaboutRoute, aboutRoute, createPost, updatePost, deletePost } = require("../controllers/aboutControllers")

const router = express.Router();

router.route("/about").get(AllaboutRoute).post(createPost)

router.route("/about/:id").delete(deletePost).put(updatePost).get(aboutRoute)

module.exports = router