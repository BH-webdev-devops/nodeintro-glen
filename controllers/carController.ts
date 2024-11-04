import cars from '../data/carData'
import { Router, Request, Response } from "express"


export const carController = {
    getCars: (req: Request, res: Response) : any => {
        return res.json(cars);
    },

    getCarById: (req: Request, res: Response) => {
        try {
            const carId = parseInt(req.params.id)
            const carById = cars.find((car) => car.id === carId)
    
            if (!carById) {
                res.json({message: "No car found"})
            }
            res.json(carById)
    
        } catch (err) {
            res.json(err)
        }
    },

    createNewCar: (req: Request, res: Response) => {
        const {brand, year, model} = req.body;
        const newCar = {
            id : cars.length + 1,
            brand,
            year,
            model
        }
        cars.push(newCar)
        res.json(cars)
    },

    updateCar: (req: Request, res: Response) => {
        const carToUpdateId = parseInt(req.params.id);
        const { brand, year, model } = req.body;
    
        let carToUpdate = cars.find((car) => car.id === carToUpdateId);
    
        try {
            if (carToUpdate) {
                carToUpdate.brand = brand;
                carToUpdate.year = year;
                carToUpdate.model = model;
                res.json(cars);
            } else {
                res.status(404).json({message: "No car found"})
            }
        
        } catch (err) {
            res.status(500).json({message : "Internal server error!"})
        }
    },

    deleteCar: (req: Request, res: Response) => {
        const carToDeleteId = parseInt(req.params.id);
        const carIndex = cars.findIndex((car) => car.id === carToDeleteId);
    
        try {
            if (carIndex === -1) {
                res.status(404).json({message: "No car found"})
            } else {
                cars.splice(carIndex, 1); 
    
                res.json(cars); 
            }
      
        } catch (err) {
            res.status(500).json({message : "Internal server error!"})
        }
    }
}

