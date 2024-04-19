

const express = require("express");
const {serviceRoute, AllserviceRoute, createPost, updatePost, deletePost } = require("../controllers/serviceControllers")

const router = express.Router();

router.route("/service").get(AllserviceRoute).post(createPost)

router.route("/service/:id").delete(deletePost).put(updatePost).get(serviceRoute)

module.exports = router