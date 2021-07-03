import { Request, Response } from 'express'
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import twitter from "../services/twitter";

// Defining methods for the userController
export default {
    search: async function(req: Request, res: Response) {
      try{
        const userList = await twitter.searchTwitter(req.query.q as string, Number(req.query.page), Number(req.query.count))
        res.status(StatusCodes.OK).json(userList)
      }
      catch(err){
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR))
      }
    },
    show: async function(req: Request, res: Response) {
      try{
        const userDetails = await twitter.getUserDetails(req.query.q as string); 
        res.status(StatusCodes.OK).json(userDetails)
      }
      catch(err){
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR))
      }
    },
};

