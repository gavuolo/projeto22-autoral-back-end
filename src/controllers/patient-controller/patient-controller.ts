

import { AuthenticateToken } from "@/middlewares/authentication-middleware";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function createPatient(
req: AuthenticateToken,
res: Response, 
next: NextFunction
) {
  const { userId } = req;
  
  try {
    return res.send('oi')
  } catch (error) {
    return console.log(error.message);
  }
}
