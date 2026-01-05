
import express from 'express';
import { deleteThumbnail, generateThumbnail } from '../controllers/ThumbnailsController.js';
import protect from '../middlewares/auth.js';


const ThumbnailRouter = express.Router();

// adding different end points for thumbnail generation

ThumbnailRouter.post('/generate', protect, generateThumbnail);
ThumbnailRouter.delete('/delete/:id', protect, deleteThumbnail);

export default ThumbnailRouter;

