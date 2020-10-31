import express from "express";
const usersController = require("../../controllers/usersController");

const ROUTER = express.Router();
// Matches with "/api/users/search"
ROUTER.route("/search")
  .get(usersController.search)

// Matches with "/api/users/show"
ROUTER.route("/show")
  .get(usersController.show)

export default ROUTER;