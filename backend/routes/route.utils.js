const { postCollegeList } = require("../controllers/controller.utils");

const express = require("express");

const router = express.Router();

router.post("/colleges", postCollegeList);

module.exports = router;
