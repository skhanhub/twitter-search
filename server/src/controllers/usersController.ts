import express from 'express'
import twitter from "../services/twitter";




// Defining methods for the userController
module.exports = {
    search: async function(req: express.Request, res: express.Response) {

      try{
        const userList = await twitter.searchTwitter(req.query.q, req.query.page, req.query.count)
        res.json(userList)
      }
      catch(err){
        console.log(err)
        res.status(422).json(err)
      }
    },
    show: async function(req: express.Request, res: express.Response) {

      try{
        const userDetails = await twitter.getUserDetails(req.query.q); 
        res.json(userDetails)
        
      }
      catch(err){
        console.log(err)
        res.status(422).json(err)
      }


    },
};

