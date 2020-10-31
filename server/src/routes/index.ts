import express from "express";
import apiRoutes  from "./api";

const ROUTER = express.Router();


// API Routes
ROUTER.use("/api", apiRoutes);

export default ROUTER;