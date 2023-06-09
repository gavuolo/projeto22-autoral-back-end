import { AuthenticateToken } from "@/middlewares/authentication-middleware";
import { LoginBody } from "@/protocols";
import signInServices from "@/services/sign-in-services";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function signIn(req: AuthenticateToken, res: Response, next: NextFunction) {
  const { email, password } = req.body as LoginBody

  try{
    const login = await signInServices.sessionPost(email, password)
    return res.status(httpStatus.OK).send(login)
  }catch(error){
    return res.status(httpStatus.UNAUTHORIZED).send(error.message)
  }
}
