import express, {Request, Response, NextFunction} from 'express'   


const checkCarData = (req: Request, res: Response, next: NextFunction): any => {

    const { brand, year, model } = req.body;
    if (!brand || !year || !model) {
        return res.json({message: "Please provide information about the car!"})
    }
    next();
}

export default checkCarData