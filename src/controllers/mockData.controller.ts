import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import getSlidesMockData from '../mockdata/slides';
import getProductsMockData from '../mockdata/products';

/**
 * Get all the slides
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export const fetchSlides = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = getSlidesMockData();
      
    res.status(StatusCodes.OK).json({
      code: StatusCodes.OK,
      data: data
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Get all the slides
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export const fetchProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = getProductsMockData();
      
    res.status(StatusCodes.OK).json({
      code: StatusCodes.OK,
      data: data
    });
  } catch (err) {
    next(err);
  }
}