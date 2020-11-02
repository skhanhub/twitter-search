import express from 'express'
import twitter from "../services/twitter";




// Defining methods for the userController
export default {
    search: async function(req: express.Request, res: express.Response) {

      try{
        const userList = await twitter.searchTwitter(req.query.q as string, Number(req.query.page), Number(req.query.count))
        res.json(userList)
      }
      catch(err){
        console.log(err)
        res.status(422).json(err)
      }
    },
    show: async function(req: express.Request, res: express.Response) {

      try{
        const userDetails = await twitter.getUserDetails(req.query.q as string); 
        res.json(userDetails)
        
      }
      catch(err){
        console.log(err)
        res.status(422).json(err)
      }


    },
};

