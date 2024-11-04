import express, {Request, Response, NextFunction} from 'express'   
import carRouter from './routes/carRouter'

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", carRouter);

const middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Hello this is a middleware");
    next();
}

const secondMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Hello this is the 2nd middleware");
    next();
}

app.get('/', middleware, secondMiddleware, (req: Request, res: Response) => {
    res.send('Welcome to my API')
}); 

app.listen(3002, () => console.log('Server is running on port 3002'))   