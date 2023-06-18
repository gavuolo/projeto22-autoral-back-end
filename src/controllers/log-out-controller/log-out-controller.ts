import { AuthenticateToken } from "@/middlewares/authentication-middleware";
import { NextFunction, Request, Response } from "express";
import logOutServices from "@/services/log-out-services";
import httpStatus from "http-status";

export async function logOut(
req: AuthenticateToken,
res: Response, 
next: NextFunction
) {
  const authorization = req.headers.authorization;
  const { userId } = req;
  const token = authorization?.replace("Bearer ", "");
  try {
    const sessionDelete = await logOutServices.logOutService(token, userId);
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST)
  }
}
