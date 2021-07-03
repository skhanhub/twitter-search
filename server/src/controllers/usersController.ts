import { Request, Response } from 'express'
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { MISSING_PARAMS } from "../constant/error.constant";
import twitter from "../services/twitter";

// Defining methods for the userController
export default {
    search: async function(req: Request, res: Response) {
      try{
        if (req.query.q){
          const userList = await twitter.searchTwitter(req.query.q as string, Number(req.query.page), Number(req.query.count))
          res.status(StatusCodes.OK).json(userList)
        } else {
          return res.status(StatusCodes.BAD_REQUEST).json(MISSING_PARAMS)
        }
      }
      catch(err){
        console.error(err)
        if(Array.isArray(err) && err[0].message) {
          return res.status(StatusCodes.BAD_REQUEST).json(err[0].message)
        }
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR))
      }
    },
    show: async function(req: Request, res: Response) {
      try{
        if (req.query.q){
          const userDetails = await twitter.getUserDetails(req.query.q as string); 
          res.status(StatusCodes.OK).json(userDetails)
        } else {
          return res.status(StatusCodes.BAD_REQUEST).json(MISSING_PARAMS)
        }
      }
      catch(err){
        console.error(err)
        if(Array.isArray(err) && err[0].message) {
          return res.status(StatusCodes.BAD_REQUEST).json(err[0].message)
        }
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR))
      }
    },
};

