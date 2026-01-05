import express, { Request, Response } from 'express';
import cors from "cors"
import 'dotenv/config';
import connectDB from './configs/db.js';
import session from 'express-session'
import MongoStore from 'connect-mongo'
import AuthRouter from './routes/AuthRoutes.js';
import ThumbnailRouter from './routes/ThumbnailRoutes.js';
import UserRouter from './routes/UserRoutes.js';

await connectDB();

const app = express();

declare module 'express-session'{
    interface SessionData {
        isLoggedIn: boolean;
        userId: string;
    }
}

// add middleware
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000","https://thumb-nail-generator-client.vercel.app"],
    credentials: true,
}));
app.use(session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24*7 , // 7 days expiration
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite:'none',
    path:'/',
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI as string,
        collectionName: 'sessions',
    })
}));

app.use(express.json()); // all the requests to the server will be parsed as JSON method

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

// new Routes paths (APIs for different functionalities like auth, thumbnail generation, user thumbnails etc (what is use => to separate different functionalities in different files for better code management and readability))
app.use('/api/auth',AuthRouter);
app.use('/api/thumbnail',ThumbnailRouter);
app.use('/api/user', UserRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});