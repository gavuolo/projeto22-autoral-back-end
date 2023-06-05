import userRepository from '@/repositories/user-repository';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function userPost(req: Request, res: Response){
    const {email, password, userType} = req.body
    try{ 
        const user = await userRepository.create(email, password, userType)
        return res.status(httpStatus.CREATED).send({
            id: user.id,
            email: user.email
        })
    }catch(err){
        return res.send(err.message)
    }
}