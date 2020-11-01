import express from "express";
import path from "path";
import apiRoutes  from "./api";

const ROUTER = express.Router();

/*
  GET route for fetching the index.html home page
  This route does not take any arguments
  It returns the index.html page
*/
ROUTER.get('/', async (req, res, next) => {
  try{
    console.log(path.join(__dirname, '../public'))
    res.status(200).sendFile(path.join(__dirname, '../public'));
  } catch(err) {
    // If there is an error then pass the error to the next function
    return next(err);
  }
})

// API Routes
ROUTER.use("/api", apiRoutes);

export default ROUTER;