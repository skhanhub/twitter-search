import express from "express";
import usersRoutes from "./users";

const router = express.Router();
// Matches with "/api/users
router.use("/users", usersRoutes);

export default router;