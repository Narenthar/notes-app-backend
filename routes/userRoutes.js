const { registerUser } = require("../controllers/userControllers");

const router = require("express").Router();

router.post("/", registerUser);
router.post("/login", registerUser);

module.exports = router;
