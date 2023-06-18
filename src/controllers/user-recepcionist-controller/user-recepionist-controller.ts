import { AuthenticateToken } from "@/middlewares/authentication-middleware";
import { UserRecepcionistType } from "@/protocols";
import { createUser } from "@/services/sign-up-services";
import { recepcionistPost } from "@/services/user-recepcionist-service";
import { User } from "@prisma/client";
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
        const response = recepcionistPost(userForms, userId)
        return res.send(response)
    } catch (error) {
        next(error)
    }
}

export async function recepcionistUpdate(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        return res.send('oi')
    } catch (error) {
        next(error)
    }
}