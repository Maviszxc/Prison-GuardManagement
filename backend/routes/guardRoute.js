const express = require("express");
const router = express.Router();

const guardController = require("../controllers/guardController");

// get all list of prisoners
router.get("/guards", guardController.guards);
router.get("/guard/:id", guardController.guard);
router.get("/search/guard", guardController.searchGuard);
router.get("/delete/guards/:id", guardController.deleteGuardById);

module.exports = router;
