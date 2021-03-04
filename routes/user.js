const router = require("express").Router();
const ctrl = require("../controllers");
const passport = require("passport");

// routes
router.get("/test", ctrl.user.test);
router.get("/profile", ctrl.user.profile);
router.post("/register", ctrl.user.register);
router.post(
  "/login",
  passport.authenticate("jwt", { session: false }),
  ctrl.user.login
);

module.exports = router;
