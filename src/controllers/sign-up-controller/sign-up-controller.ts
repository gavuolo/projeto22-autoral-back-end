import { createUser } from "@/services/sign-up-services";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function userPost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password, userType, confirmPassword } = req.body;
  try {
    const user = await createUser({
      email,
      password,
      userType,
      confirmPassword,
    });
    return res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    if (error.name === 'DuplicatedEmailError' || error.name === "differentPasswordError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    next(error)
  }
}
