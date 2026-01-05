


import { Request, Response } from "express";
import Thumbnail from "../models/Thumbnail.js";

// Controllers to get All user Thumbnails
export const getUsersThumbnails = async (req: Request, res: Response) => {
    try{
          const {userId} = req.session;
          const thumbnails = await Thumbnail.find({userId}).sort({createdAt:-1});
        //   returning the thumbnails response
          res.json({thumbnails})
    }
    
    catch(error:any){
                  console.log(error);
                    res.status(500).json({message: error.message}); 
     }
    
}

// controllers to get the single thumbnail of a User

export const getThumbnailbyId = async (req: Request, res: Response) => {
    try{
            const {userId} = req.session;
            const {id} = req.params;
            const thumbnail = await Thumbnail.findOne({userId,_id:id});

            res.json({thumbnail});

    }

     catch(error:any){
                  console.log(error);
                    res.status(500).json({message: error.message}); 
     }
    
    
}