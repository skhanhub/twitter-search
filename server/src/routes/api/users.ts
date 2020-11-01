import express from "express";
const usersController = require("../../controllers/usersController");

const router = express.Router();
// Matches with "/api/users/search"
router.route("/search")
  .get(usersController.search)

// Matches with "/api/users/show"
router.route("/show")
  .get(usersController.show)

export default router;