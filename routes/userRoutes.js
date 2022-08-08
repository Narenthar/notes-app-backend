const {
  registerUser,
  authUser,
  updateUserProfile,
} = require("../controllers/userControllers");
const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
