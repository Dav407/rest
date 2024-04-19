


const express = require("express");
const { AlluserRoute, userRoute, createPost, updatePost, deletePost} = require('../controllers/productControllers')

const router = express.Router();

router.route("/user").get(AlluserRoute).post(createPost)

router.route("/user/:id").get(userRoute).put(updatePost).delete(deletePost)

module.exports = router