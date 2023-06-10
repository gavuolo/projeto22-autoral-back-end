import { UserStaff } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { AuthenticateToken } from "@/middlewares/authentication-middleware";
export async function userStaffCreate(
  req: AuthenticateToken,
  res: Response,
  next: NextFunction
) {
  const staffForm = req.body as UserStaff;
  console.log(staffForm)
  try {
    return res.send(staffForm)
  } catch (error) {
    console.log('DKOASPKDPOSA')
    return res.send(error)
  }
}
