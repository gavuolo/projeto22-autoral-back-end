import { AuthenticateToken } from "@/middlewares/authentication-middleware";
import { UserRecepcionistType } from "@/protocols";
import { recepcionistPost } from "@/services/user-recepcionist-service";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function recepcionistCreate(
  req: AuthenticateToken,
  res: Response,
  next: NextFunction
) {
  const userForms = req.body as UserRecepcionistType;
  const { userId } = req;
  try {
    const response = await recepcionistPost(userForms, userId);
    return res.status(httpStatus.CREATED).send(response);
  } catch (error) {
    if (error.name === "ConflictError" || error.name === "cpfAlreadyExist" || error.name === 'userAlreadyRegistered') {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }
    next(error);
  }
}
export async function recepcionistUpdate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.send("oi");
  } catch (error) {
    next(error);
  }
}
