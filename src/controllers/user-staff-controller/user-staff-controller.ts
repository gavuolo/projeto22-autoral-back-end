import { Speciality, UserStaff } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { AuthenticateToken } from "@/middlewares/authentication-middleware";
import {
  findUserStaff,
  specialityCreate,
  updateRegister,
  userStaffRegister,
} from "@/services/user-staff-services";
import { UserStaffType } from "@/protocols";
import httpStatus from "http-status";

export async function userStaffCreate(
  req: AuthenticateToken,
  res: Response,
  next: NextFunction
) {
  const staffForm = req.body as UserStaffType;
  const { userId } = req;
  try {
    const response = await userStaffRegister(userId, staffForm);
    return res.status(httpStatus.CREATED).send(response);
  } catch (error) {
    if (
      error.name === "ConflictError" ||
      error.name === "cpfAlreadyExist" ||
      error.name === "userAlreadyRegistered"
    ) {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }
    next(error);
  }
}
export async function updateUserStaff(
  req: AuthenticateToken,
  res: Response,
  next: NextFunction
) {
  const staffForm = req.body;
  const { userId } = req;
  try {
    const response = await updateRegister(userId, staffForm);
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
export async function getUserStaff(
  req: AuthenticateToken,
  res: Response,
  next: NextFunction
) {
  const { userId } = req;
  try{
    const response = await findUserStaff(userId);
    return res.status(httpStatus.OK).send(response);
  }catch(error){
    if(error.name === "incompleteRegistrationError"){
      return res.status(httpStatus.CONFLICT).send(error);
  }
  next(error)
  }
}
export async function speciality(
  req: AuthenticateToken,
  res: Response,
  next: NextFunction
) {
  const { name } = req.body;
  try {
    const response = await specialityCreate(name);
    return res.status(httpStatus.CREATED).send(response);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
