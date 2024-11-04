import { Router, Request, Response } from "express"
import cars from "../data/carData"
import { carController } from '../controllers/carController'

const carRouter = Router();

carRouter.get('/cars', carController.getCars)
carRouter.get('/cars/:id', carController.getCarById)
carRouter.post('/cars/', carController.createNewCar)
carRouter.put('/cars/:id', carController.updateCar)
carRouter.delete('/cars/:id', carController.deleteCar)


export default carRouter;   