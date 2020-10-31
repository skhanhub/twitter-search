import express from "express";
import usersRoutes from "./users";

const ROUTER = express.Router();
ROUTER.use("/users", usersRoutes);

export default ROUTER;